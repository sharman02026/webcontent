const SHEET_NAME = "Inquiries";
const HEADERS = [
  "Date & Time",
  "Name",
  "Phone",
  "Email",
  "Subject/Service",
  "Message",
  "Company",
];

function doPost(e) {
  try {
    const payload = JSON.parse((e.postData && e.postData.contents) || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty(
      "INQUIRY_WEBHOOK_SECRET",
    );
    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ success: false, message: "Unauthorized" });
    }

    const sheet = getInquirySheet();
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      ensureHeaders(sheet);
      sheet.appendRow([
        payload.submittedAt ? new Date(payload.submittedAt) : new Date(),
        safeCell(payload.name),
        safeCell(payload.phone),
        safeCell(payload.email),
        safeCell(payload.inquiryType),
        safeCell(payload.message),
        safeCell(payload.company),
      ]);
    } finally {
      lock.releaseLock();
    }
    return jsonResponse({ success: true });
  } catch {
    console.error("Inquiry append failed");
    return jsonResponse({ success: false, message: "Unable to save inquiry" });
  }
}

function getInquirySheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function safeCell(value) {
  const text = String(value || "").trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
