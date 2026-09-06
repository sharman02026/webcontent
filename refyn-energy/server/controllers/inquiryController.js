const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\-\s\d]{7,25}$/;
const limits = {
  name: 100,
  company: 120,
  phone: 25,
  email: 254,
  inquiryType: 100,
  message: 3000,
};

function clean(value, maxLength) {
  return (
    String(value ?? "")
      // Remove non-printing request characters before forwarding to Sheets.
      // eslint-disable-next-line no-control-regex
      .replace(/[\u0000-\u001F\u007F]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, maxLength)
  );
}

export function validateInquiry(body = {}) {
  const inquiry = Object.fromEntries(
    Object.entries(limits).map(([field, maxLength]) => [
      field,
      clean(body[field], maxLength),
    ]),
  );
  const required = ["name", "phone", "email", "inquiryType", "message"];

  if (required.some((field) => !inquiry[field])) {
    return { error: "Please complete all required fields." };
  }
  if (!EMAIL_PATTERN.test(inquiry.email)) {
    return { error: "Please enter a valid email address." };
  }
  if (!PHONE_PATTERN.test(inquiry.phone)) {
    return { error: "Please enter a valid phone number." };
  }

  return { inquiry };
}

export async function sendToGoogleSheet(inquiry, fetchImpl = fetch) {
  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const webhookSecret = process.env.GOOGLE_APPS_SCRIPT_SECRET;
  if (!webhookUrl || !webhookSecret) {
    throw new Error("Google Sheets integration is not configured");
  }

  const response = await fetchImpl(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: webhookSecret,
      submittedAt: new Date().toISOString(),
      ...inquiry,
    }),
    signal: AbortSignal.timeout(
      Number(process.env.REQUEST_TIMEOUT_MS) || 10000,
    ),
  });
  if (!response.ok)
    throw new Error(`Apps Script returned HTTP ${response.status}`);

  const result = await response.json();
  if (!result.success) throw new Error("Apps Script rejected the inquiry");
}

export async function submitInquiry(request, response) {
  const { inquiry, error } = validateInquiry(request.body);
  if (error)
    return response.status(400).json({ success: false, message: error });

  try {
    await sendToGoogleSheet(inquiry);
    return response.status(201).json({
      success: true,
      message: "Thank you. Your inquiry has been received.",
    });
  } catch {
    console.error("Inquiry submission failed", {
      event: "GOOGLE_SHEETS_FORWARD_FAILED",
    });
    return response.status(502).json({
      success: false,
      message: "We could not submit your inquiry. Please try again shortly.",
    });
  }
}
