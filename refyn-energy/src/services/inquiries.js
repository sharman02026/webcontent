export async function submitInquiry(inquiry) {
  let response;
  let result;
  try {
    response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiry),
      signal: AbortSignal.timeout(35000),
    });
    result = await response.json();
  } catch {
    throw new Error("We couldn't confirm your inquiry was saved. Please try again shortly or contact info@refynenergy.com.");
  }
  if (!response.ok || result.success !== true) {
    const validationMessages = [
      "Please complete all required fields.",
      "Please enter a valid email address.",
      "Please enter a valid phone number.",
    ];
    if (response.status === 400 && validationMessages.includes(result.message)) {
      throw new Error(result.message);
    }
    throw new Error("We couldn't confirm your inquiry was saved. Please try again shortly or contact info@refynenergy.com.");
  }
}
