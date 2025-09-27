import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // ✅ 1. ולידציה בסיסית עם Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { valid: false, reason: "Invalid email format", score: 0 },
        { status: 400 }
      );
    }

    const apiKey = process.env.ABSTRACT_API_KEY;

    // ✅ 2. קריאה ל-Abstract API
    let data;
    try {
      const response = await axios.get(
        "https://emailreputation.abstractapi.com/v1/",
        {
          params: {
            api_key: apiKey,
            email,
          },
          timeout: 4000, // לא נתקע – 4 שניות מקס
        }
      );
      data = response.data;
      console.log("📩 Abstract API response:", data);
    } catch (apiError) {
      console.warn("⚠️ Abstract API unavailable, fallback to regex only.");
      // אם ה-API לא זמין → נאשר לפי Regex בלבד
      return NextResponse.json({
        valid: true,
        reason: "Regex only (API timeout)",
        score: 80, // ניקוד ביניים
      });
    }

    // ✅ 3. ניתוח תוצאה מה-API
    if (
      data.deliverability === "DELIVERABLE" &&
      data.is_disposable.value === false
    ) {
      // Gmail / Yahoo / Outlook = free
      if (data.is_free.value === true) {
        return NextResponse.json({
          valid: true,
          reason: "Valid free email (e.g. Gmail)",
          score: 90,
        });
      }

      // דומיין עסקי
      return NextResponse.json({
        valid: true,
        reason: "Valid business email",
        score: 100,
      });
    } else {
      // לא ניתן לשליחה או חד-פעמי
      return NextResponse.json({
        valid: false,
        reason: data.deliverability || "Undeliverable",
        score: 0,
      });
    }
  } catch (error) {
    console.error("❌ Email validation error:", error.message);
    return NextResponse.json(
      { valid: false, reason: "Server error", score: 0 },
      { status: 500 }
    );
  }
}
