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
        {[
          {
            img: "/clients/anna.jpg",
            name: "Anna R.",
            text: "The results were amazing – our leads and sales have grown consistently.",
          },
          {
            img: "/clients/james.jpg",
            name: "James S.",
            text: "Outstanding service and a fantastic team. Couldn’t be happier!",
          },
          {
            img: "/clients/david.jpg",
            name: "David K.",
            text: "They redesigned my site and conversions increased by 150%.",
          },
          {
            img: "/clients/sarah.jpg",
            name: "Sarah L.",
            text: "The design quality exceeded my expectations – truly professional.",
          },
          {
            img: "/clients/michael.jpg",
            name: "Michael T.",
            text: "Fast delivery and excellent support. Highly recommended!",
          },
        ].map((t, i) => (
          <motion.div
            key={i}
            className="testimonial"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={t.img} alt={t.name} />
            <div>
              <p>“{t.text}”</p>
              <h4>⭐ ⭐ ⭐ ⭐ ⭐ <span>{t.name}</span></h4>
            </div>
          </motion.div>
        ))}
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
            q: "How much does it cost?",
            a: "Pricing depends on your needs – from simple landing pages to full eCommerce solutions.",
          },
          {
            q: "Can you add an online store?",
            a: "Yes! We build eCommerce websites with secure payment integrations.",
          },
          {
            q: "What if I’m not satisfied?",
            a: "We provide unlimited revisions until you’re 100% happy with the result.",
          },
          {
            q: "Will my site be mobile-friendly?",
            a: "Absolutely – all websites are fully responsive and optimized for mobile.",
          },
          {
            q: "Do you provide ongoing support?",
            a: "Yes, we offer maintenance packages to keep your site updated and secure.",
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
