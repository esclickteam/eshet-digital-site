"use client";

import React from "react";
import "./techlogos.css";

const logos = [
  { src: "/icons/react.svg", label: "React" },
  { src: "/icons/nextjs.svg", label: "Next.js" },
  { src: "/icons/shopify.svg", label: "Shopify" },
  { src: "/icons/stripe.svg", label: "Stripe" },
  { src: "/icons/wordpress.svg", label: "WordPress" },
  { src: "/icons/mongodb.svg", label: "MongoDB" },
];

export default function TechLogos() {
  return (
    <section className="tech-logos">
      <div className="logos-track">
        {/* לולאה רגילה */}
        {logos.map((logo, i) => (
          <div className="logo-card" key={i}>
            <img src={logo.src} alt={logo.label} loading="lazy" />
            <span>{logo.label}</span>
          </div>
        ))}

        {/* שכפול – כדי לייצר אינפיניטי גלילה חלקה */}
        {logos.map((logo, i) => (
          <div className="logo-card" key={`dup-${i}`}>
            <img src={logo.src} alt={logo.label} loading="lazy" />
            <span>{logo.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
