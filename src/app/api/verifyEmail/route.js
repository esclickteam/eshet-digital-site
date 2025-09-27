import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // ✅ בדיקה בסיסית עם Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { valid: false, reason: "INVALID_FORMAT", message: "Invalid email format" },
        { status: 400 }
      );
    }

    let data;
    try {
      const apiKey = process.env.ABSTRACT_API_KEY;

      if (!apiKey) {
        console.error("❌ Missing ABSTRACT_API_KEY in environment");
        return NextResponse.json(
          { valid: false, reason: "NO_API_KEY", message: "API key not configured" },
          { status: 500 }
        );
      }

      console.log("📨 Validating email:", email);

      const response = await axios.get("https://emailreputation.abstractapi.com/v1/", {
        params: { api_key: apiKey, email },
        timeout: 5000,
      });

      console.log("✅ Abstract API Response:", response.data);
      data = response.data;
    } catch (err) {
      console.error("❌ Abstract API request failed:", err.message);
      return NextResponse.json({
        valid: true,
        reason: "API_UNAVAILABLE",
        message: "Validation service unavailable, regex only",
      });
    }

    // ✅ Disposable
    if (data.is_disposable?.value) {
      return NextResponse.json({
        valid: false,
        reason: "DISPOSABLE",
        message: "Disposable email",
      });
    }

    // ✅ Deliverability
    switch (data.deliverability) {
      case "DELIVERABLE":
        return NextResponse.json({
          valid: true,
          reason: "DELIVERABLE",
          message: "Email is deliverable",
        });

      case "UNDELIVERABLE":
        return NextResponse.json({
          valid: false,
          reason: "UNDELIVERABLE",
          message: "Email is not deliverable",
        });

      case "RISKY":
        return NextResponse.json({
          valid: true,
          reason: "RISKY",
          message: "Email is risky (catch-all domain)",
        });

      default:
        return NextResponse.json({
          valid: false,
          reason: "UNKNOWN",
          message: "Unknown deliverability status",
        });
    }
  } catch (error) {
    console.error("❌ Email validation error:", error.message);
    return NextResponse.json(
      { valid: false, reason: "SERVER_ERROR", message: "Server error" },
      { status: 500 }
    );
  }
}
