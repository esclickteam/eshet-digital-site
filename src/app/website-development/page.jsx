"use client";
import React from "react";
import { motion } from "framer-motion";
import "./WebsiteLanding.css";
import GetStartedForm from "../../../components/GetStartedForm";

// Variants ל־stagger
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeOut" }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WebsiteLanding() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        {/* צורות מרחפות */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>

        <div className="hero-container">
          {/* טקסט בצד שמאל */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Website <span className="highlight">Design</span>
            </h1>
            <p>
              Discover professional website design services tailored to your
              business needs. Enhance user experience, improve search rankings,
              and drive engagement with visually appealing and responsive websites.
            </p>
            <div className="hero-cta">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#portfolio"
                className="btn-secondary"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>

          {/* תמונה / איור בצד ימין עם פרלקס עדין */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ y: -15 }}
          >
            <motion.img
              src="/images/hero-illustration.png"
              alt="Illustration of website design"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="why-choose">
        <h2>Why Choose Us?</h2>
        <motion.div
          className="features"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              icon: "/icons/Design.svg",
              title: "Custom Design",
              text: "Modern, branded, and built to impress clients."
            },
            {
              icon: "/icons/Mobile.svg",
              title: "Mobile & SEO Ready",
              text: "Optimized for smartphones and search engines."
            },
            {
              icon: "/icons/Speed.svg",
              title: "Fast & Secure",
              text: "Quick turnaround with top-notch security."
            },
            {
              icon: "/icons/Support.svg",
              title: "Dedicated Support",
              text: "Personalized guidance from start to finish."
            }
          ].map((feat, i) => (
            <motion.div
              key={i}
              className="feature"
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <img src={feat.icon} alt={feat.title} />
              <h3>{feat.title}</h3>
              <p>{feat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">
        <h2>Our Work</h2>
        <motion.div
          className="portfolio-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              src: "/portfolio/site1.jpg",
              alt: "Clinic website project",
              caption: "Clinic Website – React + SEO"
            },
            {
              src: "/portfolio/site2.jpg",
              alt: "Ecommerce website project",
              caption: "Ecommerce Store – WooCommerce"
            },
            {
              src: "/portfolio/site3.jpg",
              alt: "Custom website design project",
              caption: "Custom Website – Branding Focus"
            }
          ].map((item, i) => (
            <motion.figure
              key={i}
              className="portfolio-item"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </section>

      {/* CTA Form */}
      <section id="contact" className="cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GetStartedForm />
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              q: "How long does it take?",
              a: "Most projects take 2–4 weeks, depending on complexity."
            },
            {
              q: "Do you build ecommerce sites?",
              a: "Yes – Shopify, WordPress, WooCommerce, and custom stores."
            },
            {
              q: "How much does it cost?",
              a: "Projects start from $3,000 depending on scope and features."
            }
          ].map((item, i) => (
            <motion.details key={i} variants={item}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
