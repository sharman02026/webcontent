import assert from "node:assert/strict";
import test from "node:test";
import { sendToGoogleSheet, validateInquiry } from "./inquiryController.js";

const inquiry = {
  name: "Aarav Shah",
  company: "Example Cement",
  phone: "+91 98765 43210",
  email: "aarav@example.com",
  inquiryType: "Equipment Orders",
  message: "Please share the technical proposal.",
};

test("accepts and sanitizes a valid inquiry", () => {
  const result = validateInquiry({ ...inquiry, name: " Aarav\nShah " });
  assert.equal(result.error, undefined);
  assert.equal(result.inquiry.name, "Aarav Shah");
});

test("rejects missing required fields", () => {
  assert.equal(
    validateInquiry({ ...inquiry, phone: "" }).error,
    "Please complete all required fields.",
  );
});

test("rejects invalid email", () => {
  assert.equal(
    validateInquiry({ ...inquiry, email: "invalid" }).error,
    "Please enter a valid email address.",
  );
});

test("sends the sanitized inquiry to Apps Script", async () => {
  process.env.GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/example";
  process.env.GOOGLE_APPS_SCRIPT_SECRET = "test-secret";
  let payload;
  const fakeFetch = async (_url, options) => {
    payload = JSON.parse(options.body);
    return { ok: true, json: async () => ({ success: true }) };
  };

  await sendToGoogleSheet(inquiry, fakeFetch);
  assert.equal(payload.name, inquiry.name);
  assert.equal(payload.secret, "test-secret");
  assert.ok(payload.submittedAt);
});

test("throws when Apps Script reports a failure", async () => {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({ success: false }),
  });
  await assert.rejects(() => sendToGoogleSheet(inquiry, fakeFetch));
});
