"use client";
import { useState } from "react";
import "./QuestionsAnswers.css";

export default function FAQ() {
  const faqs = [
    { q: "How long does it take?", a: "Most websites are built in 2–4 weeks, depending on the project’s complexity." },
    { q: "What if I already have a site?", a: "We offer redesign services to improve your sales performance and experience." },
    { q: "How much does it cost?", a: "Pricing depends on your needs – from simple landing pages to full eCommerce solutions." },
    { q: "Do you provide ongoing support?", a: "Yes, we offer maintenance packages to keep your site updated and secure." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely – every site we create is fully responsive across all devices." },
    { q: "Do you offer SEO optimization?", a: "Yes, we include on-page SEO best practices so your site ranks better on Google." },
    { q: "Can I update my website myself?", a: "Of course – we build sites with user-friendly editors so you can easily manage content." },
    { q: "What industries do you work with?", a: "We work with small businesses, eCommerce brands, service providers, real estate, fitness, beauty, and many more." },
    { q: "Do you integrate booking systems or online payments?", a: "Yes, we can integrate calendars, booking forms, and secure payment gateways." },
    { q: "What makes you different from other agencies?", a: "We focus on conversion-driven design, fast delivery, and ongoing client support." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Here are some of the most common questions our clients ask.</p>
      
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item ${activeIndex === i ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(i)}>
              <span>{item.q}</span>
              <span className="faq-icon">{activeIndex === i ? "–" : "+"}</span>
            </button>
            {activeIndex === i && (
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
