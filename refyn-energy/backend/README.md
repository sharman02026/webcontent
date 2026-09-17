# Refyn Energy API

Standalone Express API for contact inquiries. Deploy this folder as its own
Node.js service; it does not depend on the frontend project.

## Local setup

```bash
npm install
copy .env.example .env
npm run dev
```

The API listens on `http://localhost:3001` and exposes:

- `GET /api/health`
- `POST /api/inquiries`

Run its tests with `npm test`.

## Production deployment

Set the values from `.env.example` in your hosting provider's environment
settings. Set `CLIENT_ORIGIN` to the exact frontend URL, for example
`https://www.refynenergy.com`. Do not commit or upload `.env`.

After deployment, copy the API's public URL into the frontend deployment as
`VITE_API_BASE_URL`, e.g. `https://api.refynenergy.com`, then rebuild the
frontend. `VITE_API_BASE_URL` is intentionally public; never put webhook
secrets in frontend variables.
