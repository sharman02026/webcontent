const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export async function submitInquiry(inquiry) {
  const response = await fetch(`${apiBaseUrl}/api/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inquiry),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      result.message || "We could not submit your inquiry. Please try again.",
    );
  }

  return result;
}
