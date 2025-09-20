"use client";
import { motion } from "framer-motion";
import "./DevelopmentWorkflow.css";

export default function DevelopmentWorkflow() {
  const steps = [
    { number: "01", title: "Discovery", text: "Define goals & market research", color: "cyan" },
    { number: "02", title: "Contract", text: "Approve scope & agreement", color: "orange" },
    { number: "03", title: "Design", text: "UI/UX mockups & prototypes", color: "purple" },
    { number: "04", title: "Development", text: "Agile coding best practices", color: "pink" },
    { number: "05", title: "Soft Launch", text: "Testing & optimization", color: "yellow" },
    { number: "06", title: "Post-Launch", text: "Support & improvements", color: "green" },
  ];

  return (
    <section className="workflow-section">
      <div className="container">
        <h2 className="workflow-title">Our Development Workflow</h2>
        <p className="workflow-subtitle">
          A clear, structured process that guides your project from start to finish.
        </p>
        <div className="workflow-steps">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`workflow-step ${step.color}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {i < steps.length - 1 && <div className="arrow" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
