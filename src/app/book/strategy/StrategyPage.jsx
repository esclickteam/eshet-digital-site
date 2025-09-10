"use client";

import React, { useEffect } from "react";
import "../development/development.css"; // שימוש באותו CSS כללי
import FAQ from "../../../../components/faq";

export default function StrategyPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    document
      .querySelectorAll(".dev-block, .feature-card, .faq-section, .cta-wrapper")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dev-section">
      <div className="container">
        {/* Hero */}
        <h1 className="dev-title gradient-text">
          Digital Strategy & Maintenance
        </h1>
        <p className="dev-intro">
          We don’t just build websites — we make sure they keep growing,
          performing, and protecting your business. From smart strategies to
          ongoing technical maintenance, we’re with you every step of the way.
        </p>

        {/* Blocks */}
        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>📈 Custom Strategy</h2>
              <p>
                Every business is unique — so should be its digital strategy. We
                create custom plans that support your business goals.
              </p>
              <ul>
                <li>✔ Market & competitor analysis</li>
                <li>✔ Target audience mapping</li>
                <li>✔ Data-driven marketing plans</li>
              </ul>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/strategy-custom.png" alt="Custom Strategy" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content reverse">
            <div className="block-text">
              <h2>🛠 Website Maintenance</h2>
              <p>
                Your website must always perform — fast, secure, and error-free.
                Our maintenance services cover:
              </p>
              <ul>
                <li>✔ Software & plugin updates</li>
                <li>✔ Security monitoring & threat detection</li>
                <li>✔ Automated backups & recovery</li>
              </ul>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/strategy-maintenance.png" alt="Website Maintenance" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>🤝 Consulting & Support</h2>
              <p>
                We’re here for you with expert consulting, support, and upgrades.
                Our team makes sure you always stay ahead in the digital game.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/strategy-support.png" alt="Consulting & Support" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Secure Your Digital Future
          </a>
        </div>

        {/* FAQ */}
        <FAQ
          faqs={[
            {
              question: "Why is ongoing website maintenance important?",
              answer:
                "Without maintenance, websites can suffer from security risks, slower performance, and poor user experience.",
            },
            {
              question: "Does maintenance include content updates?",
              answer:
                "Yes, it can include content updates, blogs, and fresh information.",
            },
            {
              question: "How do you protect my website from hacks?",
              answer:
                "We apply advanced security layers, continuous monitoring, and regular backups.",
            },
            {
              question: "How long does it take to implement a new digital strategy?",
              answer:
                "It depends on your website’s complexity and business goals, but in most cases, you can see initial results within a few weeks.",
            },
          ]}
        />

        {/* CTA (Footer) */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Secure Your Digital Future
          </a>
        </div>
      </div>
    </section>
  );
}
