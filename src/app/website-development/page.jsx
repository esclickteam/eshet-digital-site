"use client";
import React from "react";
import { motion } from "framer-motion";
import "./WebsiteLanding.css";

export default function WebsiteLanding() {
  return (
    <div className="landing-page">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              🚀 Build Websites That Convert
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Professional websites built to drive leads and sales for your
              business.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary">
                Book a Free Call
              </a>
              <a href="#quote" className="btn btn-outline">
                Get Instant Quote
              </a>
            </motion.div>
            <motion.div
              className="hero-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              ⭐⭐⭐⭐⭐ <span>Trusted by 50+ Businesses</span>
            </motion.div>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/images/hero-mockup.png"
              alt="Website mockup"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="stats-grid">
          {[
            { num: "100+", text: "Projects Delivered", color: "purple" },
            { num: "95%", text: "Client Satisfaction", color: "pink" },
            { num: "2–4", text: "Weeks Delivery", color: "orange" },
            { num: "⭐", text: "Dedicated Team", color: "blue" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className={`stat-box ${stat.color}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{stat.num}</h3>
              <p>{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Portfolio ===== */}
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {[
            {
              src: "/portfolio/wordpress.jpg",
              title: "WordPress",
              text: "+200% Leads",
            },
            {
              src: "/portfolio/ecommerce.jpg",
              title: "eCommerce",
              text: "Up to 50% less cost",
            },
            {
              src: "/portfolio/custom.jpg",
              title: "Custom",
              text: "Brand Focused",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="portfolio-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.src} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#" className="btn btn-case">
                View Case Study
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <motion.div
          className="testimonial"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/clients/anna.jpg" alt="Anna R." />
          <p>
            “The results were amazing – our leads and sales have grown
            consistently.”
          </p>
          <h4>⭐ ⭐ ⭐ ⭐ ⭐ Anna R.</h4>
        </motion.div>
        <motion.div
          className="testimonial"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/clients/james.jpg" alt="James S." />
          <p>
            “Outstanding service and a fantastic team. Couldn’t be happier!”
          </p>
          <h4>⭐ ⭐ ⭐ ⭐ ⭐ James S.</h4>
        </motion.div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq">
        <h2>FAQ</h2>
        {[
          {
            q: "How long does it take?",
            a: "Most websites are built in 2–4 weeks, depending on the project’s complexity.",
          },
          {
            q: "What if I already have a site?",
            a: "We offer redesign services to improve your sales performance and experience.",
          },
          {
            q: "What if I’m not satisfied?",
            a: "We work closely with you and provide unlimited revisions until launch.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
