"use client";
import { useEffect } from "react";
import "./StatsSection.css";

export default function StatsSection() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");

    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const duration = 1500;
      const startTime = performance.now();

      const update = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        counter.innerText = value;

        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
              const numberEl = entry.target.querySelector(".stat-number");
              if (numberEl) animateCounter(numberEl);
              observer.unobserve(entry.target);
            }, index * 300); // 👈 השהייה לכל בלוק
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll(".stat").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="stats-section">
      <div className="stat">
        <span className="stat-number color1" data-target="7">0</span>+
        <p>Years of Experience</p>
      </div>
      <div className="stat">
        <span className="stat-number color2" data-target="150">0</span>+
        <p>Successful Projects</p>
      </div>
      <div className="stat">
        <span className="stat-number color3" data-target="95">0</span>%
        <p>Client Retention</p>
      </div>
    </section>
  );
}
