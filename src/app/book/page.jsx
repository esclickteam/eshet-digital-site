"use client";
import { useEffect } from "react";

export default function BookPage() {
  useEffect(() => {
    if (!document.querySelector("#calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section style={{ minHeight: "100vh", padding: "80px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>
        Schedule Your Discovery Call
      </h2>
      <p style={{ maxWidth: "600px", margin: "0 auto 40px", fontSize: "1.1rem", color: "#555" }}>
        Pick a time that works best for you and let’s discuss how Eshet Digital can help grow your business.
      </p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/eshetdigital"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </section>
  );
}
