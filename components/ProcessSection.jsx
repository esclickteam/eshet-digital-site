"use client";
import React from "react";
import { motion } from "framer-motion";
import "./ProcessSection.css";

export default function ProcessSection() {
  const steps = [
    { num: "01", title: "Define Goals", text: "We analyze your needs, target audience & objectives.", color: "step1" },
    { num: "02", title: "Approve Contract", text: "Clear agreement on scope, timeline & budget.", color: "step2" },
    { num: "03", title: "Design Mockups", text: "Custom UI/UX tailored to your brand.", color: "step3" },
    { num: "04", title: "Web Development", text: "Responsive, fast & scalable websites.", color: "step4" },
    { num: "05", title: "Soft Launch", text: "Testing & refinements before going live.", color: "step5" },
    { num: "06", title: "Post-Launch", text: "Ongoing support, updates & optimization.", color: "step6" },
  ];

  return (
    <section className="process">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Web Design Process
      </motion.h2>

      <div className="process-steps">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`step ${step.color}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <span className="step-number">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            {i < steps.length - 1 && <span className="connector"></span>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
