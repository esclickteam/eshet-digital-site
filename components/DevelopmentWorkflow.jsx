"use client";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaRocket,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";
import "./DevelopmentWorkflow.css";

const steps = [
  { icon: <FaSearch />, title: "Discovery", desc: "Requirement analysis & market research", color: "cyan" },
  { icon: <FaPaintBrush />, title: "Design", desc: "UI/UX mockups and prototypes", color: "purple" },
  { icon: <FaCode />, title: "Development", desc: "Agile coding with best practices", color: "pink" },
  { icon: <FaRocket />, title: "Launch", desc: "Soft launch and optimization", color: "orange" },
  { icon: <FaCheckCircle />, title: "Delivery", desc: "Final approval & project handover", color: "green" },
  { icon: <FaTools />, title: "Support", desc: "Post-launch support & maintenance", color: "blue" },
];

export default function DevelopmentWorkflow() {
  return (
    <section className="dev-workflow-section">
      <div className="container">
        <h2 className="section-title">Our Development Workflow</h2>
        <p className="section-subtitle">
          A clear, structured process from discovery to long-term support.
        </p>
        <div className="workflow-grid">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`workflow-step ${step.color}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
