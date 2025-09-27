import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { valid: false, reason: "No email provided" },
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

    // ✅ לוגיקה: רק אם המייל יכול לקבל הודעות והוא לא חד-פעמי
    if (data.deliverability === "DELIVERABLE" && !data.is_disposable.value) {
      return NextResponse.json({ valid: true, data });
    } else {
      return NextResponse.json({
        valid: false,
        reason: data.deliverability || "Undeliverable",
        data,
      });
    }
  } catch (error) {
    console.error("Email validation error:", error.message);
    return NextResponse.json(
      { valid: false, reason: "API error" },
      { status: 500 }
    );
  }
}
