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

    // ✅ תנאי מתוקן
    if (data.deliverability === "DELIVERABLE" && data.is_disposable.value === false) {
      return NextResponse.json({
        valid: true,
        reason: "DELIVERABLE",
        score: data.is_free.value ? 70 : 100, // Gmail = 70, דומיין עסקי = 100
      });
    } else {
      return NextResponse.json({
        valid: false,
        reason: data.deliverability || "Undeliverable",
        score: 0,
      });
    }
  } catch (error) {
    console.error("Email validation error:", error.message);
    return NextResponse.json(
      { valid: false, reason: "API error", score: 0 },
      { status: 500 }
    );
  }
}
