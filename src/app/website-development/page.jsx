"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi"; // ← פלוס/מינוס לאקורדיון
import "./WebsiteLanding.css";

export default function WebsiteLanding() {
  const testimonials = [
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
  ];

  const faqs = [
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
      q: "Do you provide ongoing support?",
      a: "Yes, we offer maintenance packages to keep your site updated and secure.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  // מעבר אוטומטי בין עדויות
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleFAQ = (i) => {
    setActiveFAQ(activeFAQ === i ? null : i);
  };

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
            <h1>🚀 Build Websites That Convert</h1>
            <p>
              Professional websites built to drive leads and sales for your
              business.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Book a Free Call
              </a>
              <a href="#quote" className="btn btn-outline">
                Get Instant Quote
              </a>
            </div>
            <div className="hero-trust">
              ⭐⭐⭐⭐⭐ <span>Trusted by 50+ Businesses</span>
            </div>
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

      {/* ===== Testimonials (Carousel) ===== */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="testimonial"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={testimonials[index].img}
                alt={testimonials[index].name}
              />
              <p>“{testimonials[index].text}”</p>
              <h4>
                ⭐ ⭐ ⭐ ⭐ ⭐ <span>{testimonials[index].name}</span>
              </h4>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="carousel-controls">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </section>

      {/* ===== FAQ (Accordion) ===== */}
      <section className="faq">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Here are some of the most common questions our clients ask.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${activeFAQ === i ? "active" : ""}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <span className="faq-icon">
                  {activeFAQ === i ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              <AnimatePresence>
                {activeFAQ === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
