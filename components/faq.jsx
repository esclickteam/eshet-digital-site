"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; 
import "./faq.css";

export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of the most common questions our clients ask.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item ${activeIndex === i ? "active" : ""}`}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === i ? <FiMinus /> : <FiPlus />}
              </span>
            </div>
            {activeIndex === i && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
