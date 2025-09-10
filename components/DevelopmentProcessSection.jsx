"use client";
import { useEffect } from "react";

export default function DevelopmentProcessSection() {
  useEffect(() => {
    const items = document.querySelectorAll(".process-image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="dev-process-section">
      <div className="container">
        <h2 className="section-title">Our Development Process</h2>
        <p className="section-subtitle">
          From analysis to delivery — a complete, structured workflow.
        </p>
        <div className="process-image-wrapper">
          <img
            src="/images/development-process.png" // 👈 התמונה שלך מתוך public
            alt="Development Process"
            className="process-image"
          />
        </div>
      </div>
    </section>
  );
}
