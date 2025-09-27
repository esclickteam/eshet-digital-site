// server.js
import express from "express";
import cors from "cors";

const app = express();

// ===== Middleware =====
app.use(express.json());

// לאפשר קריאות רק מהאתר שלך
app.use(
  cors({
    origin: "https://eshetdigital.com", // לשים את הדומיין הראשי שלך
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ===== Routes =====

// ברירת מחדל – אם נכנסים ל-root של api.eshetdigital.com
app.get("/", (req, res) => {
  res.status(404).json({ error: "API only – not a website" });
});

// דוגמא לנתיב API
app.get("/status", (req, res) => {
  res.json({ status: "ok", message: "API is working!" });
});

// עוד נתיבים שלך...
app.post("/data", (req, res) => {
  const body = req.body;
  res.json({ received: body });
});

// ===== Start Server =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
