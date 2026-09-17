# Refyn Energy website

React/Vite frontend for the Refyn Energy website. The inquiry backend is a
separate deployable Node.js project at `D:\\refyn-energy-api`.

## Frontend local setup

```bash
npm install
copy .env.example .env
npm run dev
```

To submit contact inquiries locally, start the API separately:

```bash
cd D:\refyn-energy-api
npm install
npm run dev
```

Vite proxies local `/api` requests to `http://localhost:3001`.

## Production deployment

1. Deploy `D:\refyn-energy-api` as a separate Node.js API service and configure
   the environment values in its `README.md`.
2. Set `VITE_API_BASE_URL` in the frontend host to the API's public URL, such
   as `https://api.example.com`. This value is embedded at build time.
3. Build and deploy the frontend with `npm run build`.

The API's `CLIENT_ORIGIN` must contain the exact frontend URL. Do not add API
secrets to `VITE_*` variables because they are exposed in the browser bundle.
