import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { valid: false, reason: "No email provided", score: 0 },
        { status: 400 }
      );
    }

    const apiKey = process.env.ABSTRACT_API_KEY;
    const response = await axios.get("https://emailreputation.abstractapi.com/v1/", {
      params: {
        api_key: apiKey,
        email,
      },
    });

    const data = response.data;

    // ✅ לוגיקה ל-Lead Scoring
    let valid = false;
    let score = 0;
    let reason = "";

    if (data.deliverability === "DELIVERABLE" && !data.is_disposable.value) {
      valid = true;

      if (!data.is_free.value) {
        // דומיין עסקי → הכי איכותי
        score = 100;
      } else {
        // Gmail / Yahoo / Hotmail וכו׳ → בינוני
        score = 70;
      }
    } else {
      valid = false;
      score = 0;
      reason = data.deliverability || "Undeliverable";
    }

    return NextResponse.json({
      valid,
      score,
      reason,
      data, // נחזיר גם את כל המידע המקורי מה-API
    });
  } catch (error) {
    console.error("Email validation error:", error.message);
    return NextResponse.json(
      { valid: false, reason: "API error", score: 0 },
      { status: 500 }
    );
  }
}
