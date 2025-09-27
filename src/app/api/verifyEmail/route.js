import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // 1. Regex בסיסי
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { valid: false, reason: "Invalid email format", score: 0 },
        { status: 400 }
      );
    }

    // 2. קריאה ל-Abstract API
    const apiKey = process.env.ABSTRACT_API_KEY;
    let data;
    try {
      const response = await axios.get(
        "https://emailreputation.abstractapi.com/v1/",
        {
          params: { api_key: apiKey, email },
          timeout: 4000,
        }
      );
      data = response.data;
      console.log("📩 Abstract API:", data);
    } catch (err) {
      console.warn("⚠️ Abstract API unavailable, fallback to regex only.");
      return NextResponse.json({
        valid: true,
        reason: "Regex only (API timeout)",
        score: 70,
      });
    }

    // 3. ניתוח התשובה
    if (data.is_disposable.value) {
      return NextResponse.json({
        valid: false,
        reason: "Disposable email",
        score: 0,
      });
    }

    switch (data.deliverability) {
      case "DELIVERABLE":
        return NextResponse.json({
          valid: true,
          reason: "Email is deliverable",
          score: data.is_free.value ? 85 : 100, // Gmail=85, עסקי=100
        });

      case "UNDELIVERABLE":
        return NextResponse.json({
          valid: false,
          reason: "Email is not deliverable",
          score: 0,
        });

      case "RISKY":
        return NextResponse.json({
          valid: true,
          reason: "Email is risky (catch-all domain)",
          score: 60,
        });

      default:
        return NextResponse.json({
          valid: false,
          reason: "Unknown deliverability status",
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
