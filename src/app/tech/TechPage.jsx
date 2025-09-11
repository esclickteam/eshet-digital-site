"use client";

import React from "react";
import { motion } from "framer-motion";
import "./tech.css";

export default function TechPage() {
  // אנימציות כלליות
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // דיליי בין כל ילד
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // בלוקים
  const blocks = [
    {
      title: "⚙️ Our Tech Stack",
      desc: "Every business is unique — and so are its technical needs.",
      list: [
        "WordPress – flexible & SEO-friendly",
        "Wix – fast, simple, effective",
        "Shopify – built for e-commerce growth",
        "JavaScript – the web’s core language",
        "React, Next.js, Node.js – high-performance solutions",
      ],
    },
    {
      title: "🤖 Automation & AI",
      desc: "We implement automation and AI to streamline processes.",
      list: [
        "Smart chatbots for instant replies",
        "Automated booking & CRM systems",
        "AI-driven marketing content",
        "Email & funnel automation",
      ],
    },
    {
      title: "🔒 Hosting & Security",
      desc: "We ensure your website stays online, secure, and fast.",
      list: [
        "High-speed hosting (Vercel, AWS, Cloudflare)",
        "SSL certificates for maximum trust",
        "Daily backups & monitoring",
        "Advanced cyber protection",
      ],
    },
    {
      title: "📊 Analytics & Data",
      desc: "We don’t guess — we measure and improve constantly.",
      list: [
        "Google Analytics & Search Console",
        "Heatmaps & behavior tracking",
        "Conversion optimization tools",
        "Real-time reporting dashboards",
      ],
    },
    {
      title: "🛠 Custom Development",
      desc: "When standard tools aren’t enough — we build custom solutions.",
      list: [
        "Unique web applications",
        "Custom integrations (payments, CRM, APIs)",
        "Business dashboards",
        "Scalable systems for growth",
      ],
    },
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="animated-title">
          Technology That Powers <span className="highlight">Success</span>
        </h1>
        <p>
          Behind every successful brand lies advanced technology. 
          We use the latest tools and platforms to ensure your business 
          is always one step ahead.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">
            Request a Tech Audit
          </a>
          <a href="/projects" className="btn-secondary">
            Explore Our Work
          </a>
        </div>
      </motion.section>

      {/* Tech Blocks with stagger */}
      <motion.section
        className="blocks"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {blocks.map((block, i) => (
          <motion.div className="block card" key={i} variants={fadeInUp}>
            <h2>{block.title}</h2>
            <p>{block.desc}</p>
            <ul>
              {block.list.map((item, j) => (
                <li key={j}>✔ {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Case Studies */}
      <motion.section
        className="case-studies"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <h2>🚀 Real Results with Technology</h2>
        <div className="case-grid">
          {[
            {
              title: "🏠 Real Estate Project",
              result: "Reduced load time by 40% using Next.js & Vercel.",
            },
            {
              title: "🛒 E-commerce Growth",
              result: "Boosted sales by 200% with custom Shopify apps.",
            },
            {
              title: "💼 Corporate Landing Page",
              result: "Increased conversions by 80% with a tailored design.",
            },
          ].map((caseItem, i) => (
            <motion.div
              key={i}
              className="case-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{caseItem.title}</h3>
              <p>{caseItem.result}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Outro */}
      <motion.section
        className="outro"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Let’s Build the Future Together</h2>
        <p>
          For us, technology is not the goal — it’s the foundation. 
          Success is measured by combining reliable, innovative, and secure 
          technology with the right strategy.
        </p>
        <a href="/contact" className="btn-primary large">
          Book a Free Consultation
        </a>
      </motion.section>
    </div>
  );
}
