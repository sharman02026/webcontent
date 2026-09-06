# Google Sheets inquiry storage

The React form sends inquiries to the Express API. Express validates the input
and forwards it to a private Google Apps Script webhook. No database or local
spreadsheet file is used.

Inquiry values are held only in process memory for the duration of the request.
They are not written to server files, logs, browser storage, caches, databases,
or backup services. If forwarding fails, the API returns an error and discards
the request data.

## 1. Create the Sheet and Apps Script

1. Create a Google Sheet owned by the Google account that will receive inquiries.
2. Rename one tab to `Inquiries`. It may be empty; the script creates the header
   row on its first successful request.
3. In the Sheet, open **Extensions > Apps Script**.
4. Replace the editor contents with [Code.gs](google-apps-script/Code.gs).
5. Open **Project Settings > Script Properties** and add:
   - Property: `INQUIRY_WEBHOOK_SECRET`
   - Value: a long random secret (at least 32 characters)
6. Click **Deploy > New deployment > Web app**.
7. Set **Execute as** to `Me` and **Who has access** to `Anyone`.
8. Authorize the script to edit the bound spreadsheet and copy the `/exec` URL.

`Anyone` access is required because the Express server is not signed into a
Google account. The shared secret still rejects direct unauthorized writes.
CORS configuration is unnecessary on Apps Script because only Express calls it;
the browser never receives the webhook URL or secret.

## 2. Configure the application

Copy `.env.example` to `.env` and set:

```env
PORT=3001
CLIENT_ORIGIN=http://localhost:5173
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
GOOGLE_APPS_SCRIPT_SECRET=the-same-script-property-secret
REQUEST_TIMEOUT_MS=10000
VITE_API_BASE_URL=
```

For multiple allowed frontend origins, separate `CLIENT_ORIGIN` values with
commas. Never prefix secret values with `VITE_`; Vite variables are exposed to
the browser.

## 3. Local testing

Run the backend and frontend in separate terminals:

```bash
npm run dev:server
npm run dev
```

Open `http://localhost:5173/contact`. Submit a valid inquiry and confirm that a
new row appears in `Inquiries`. The first row will contain:

`Date & Time | Name | Phone | Email | Subject/Service | Message | Company`

Automated checks:

```bash
npm run test:server
npm run lint
npm run build
```

To test validation, omit a required field or use an invalid email. To test the
failure state, temporarily use an invalid `GOOGLE_APPS_SCRIPT_URL`, restart the
backend, and submit the form. The form must remain populated and show a generic
error. Restore the URL afterward.

## 4. Production deployment

1. Deploy the React build and Express server on services that support Node.js.
2. Add the backend variables from `.env.example` in the hosting provider's
   secret/environment settings. Do not upload `.env`.
3. Set `CLIENT_ORIGIN` to the exact public frontend origin.
4. If frontend and API use different origins, build React with
   `VITE_API_BASE_URL=https://api.example.com`.
5. If both are routed through one domain, leave `VITE_API_BASE_URL` empty and
   proxy `/api/*` to the Express service at the hosting/reverse-proxy layer.
6. When `Code.gs` changes, create a new Apps Script deployment version and keep
   the deployed `/exec` URL current in the backend environment.

Verify production by submitting one identifiable test inquiry, checking the
success state, locating the new timestamped row in the Sheet, and confirming a
second rapid click cannot create another request while the first is processing.
