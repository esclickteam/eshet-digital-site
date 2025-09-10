"use client";
import React from "react";
import "./strategy.css";

export default function StrategyPage() {
  return (
    <div className="service-page">
      {/* Hero / Intro */}
      <section className="hero">
        <h1>Digital Strategy & Maintenance</h1>
        <p>
          We don’t just build websites — we make sure they keep growing,
          performing, and protecting your business. From smart strategies to
          ongoing technical maintenance, we’re with you every step of the way.
        </p>
      </section>

      {/* Blocks */}
      <section className="blocks">
        <div className="block">
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

        <div className="block">
          <h2>🛠 Website Maintenance</h2>
          <p>
            Your website must always perform — fast, secure, and error-free. Our
            maintenance services cover:
          </p>
          <ul>
            <li>✔ Software & plugin updates</li>
            <li>✔ Security monitoring & threat detection</li>
            <li>✔ Automated backups & recovery</li>
          </ul>
        </div>

        <div className="block">
          <h2>🤝 Consulting & Support</h2>
          <p>
            We’re here for you with expert consulting, support, and upgrades. Our
            team makes sure you always stay ahead in the digital game.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>❓ Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>Why is ongoing website maintenance important?</h3>
          <p>
            Without maintenance, websites can suffer from security risks, slower
            performance, and poor user experience.
          </p>
        </div>

        <div className="faq-item">
          <h3>Does maintenance include content updates?</h3>
          <p>
            Yes, it can include content updates, blogs, and fresh information.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do you protect my website from hacks?</h3>
          <p>
            We apply advanced security layers, continuous monitoring, and regular
            backups.
          </p>
        </div>

        <div className="faq-item">
          <h3>How long does it take to implement a new digital strategy?</h3>
          <p>
            It depends on your website’s complexity and business goals, but in
            most cases, you can see initial results within a few weeks.
          </p>
        </div>
      </section>
    </div>
  );
}
