import "dotenv/config";
import cors from "cors";
import express from "express";
import inquiryRouter from "./routes/inquiries.js";

const app = express();
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin))
        return callback(null, true);
      const error = new Error("Origin is not allowed");
      error.code = "ORIGIN_NOT_ALLOWED";
      return callback(error);
    },
  }),
);
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_request, response) =>
  response.json({ success: true }),
);
app.use("/api/inquiries", inquiryRouter);

app.use((error, _request, response, _next) => {
  void _next;
  if (error.code === "ORIGIN_NOT_ALLOWED") {
    return response.status(403).json({
      success: false,
      message: "This website origin is not allowed to access the API.",
    });
  }
  if (error instanceof SyntaxError && "body" in error) {
    return response
      .status(400)
      .json({ success: false, message: "Invalid request body." });
  }

  console.error("Unhandled API error", { event: "API_UNHANDLED_ERROR" });
  return response.status(500).json({
    success: false,
    message:
      "Unable to process your request right now. Please try again later.",
  });
});

const port = Number(process.env.PORT) || 3001;
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Inquiry API listening on port ${port}`));
}

export default app;
