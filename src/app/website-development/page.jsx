"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaFolderOpen, FaHandshake, FaUsers } from "react-icons/fa";
import { Smartphone, Zap, Target, Shield } from "lucide-react";
import "./WebsiteLanding.css";
import DevelopmentWorkflow from "../../../components/DevelopmentWorkflow";
import GetStartedForm from "../../../components/GetStartedForm";
import TechLogos from "../../../components/TechLogos";

export default function WebsiteLanding() {
  const testimonials = [
    { img: "/clients/anna.jpg", name: "Anna R.", text: "The results were amazing – our leads and sales have grown consistently." },
    { img: "/clients/james.jpg", name: "James S.", text: "Outstanding service and a fantastic team. Couldn’t be happier!" },
    { img: "/clients/david.jpg", name: "David K.", text: "They redesigned my site and conversions increased by 150%." },
    { img: "/clients/sarah.jpg", name: "Sarah L.", text: "The design quality exceeded my expectations – truly professional." },
    { img: "/clients/michael.jpg", name: "Michael T.", text: "Fast delivery and excellent support. Highly recommended!" },
  ];

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

  const stats = [
    { icon: <FaBriefcase />, label: "Projects Delivered", target: 100, suffix: "+", color: "purple" },
    { icon: <FaFolderOpen />, label: "Client Satisfaction", target: 95, suffix: "%", color: "pink" },
    { icon: <FaHandshake />, label: "Delivery Time", target: 4, suffix: " weeks", note: "(2–4 weeks depending on project)", color: "orange" },
    { icon: <FaUsers />, label: "Dedicated Team", target: 1, suffix: "", color: "blue" },
  ];

  const portfolio = [
    { src: "/portfolio/1.jpg", title: "Personal Training Website" },
    { src: "/portfolio/2.jpg", title: "Fashion E-commerce Website" },
    { src: "/portfolio/3.jpg", title: "Construction Business Website" },
    { src: "/portfolio/4.jpg", title: "Real Estate Business Website" },
    { src: "/portfolio/5.jpg", title: "Bakery E-commerce Website" },
    { src: "/portfolio/6.jpg", title: "Bridal Studio Website" },
    { src: "/portfolio/7.jpg", title: "Flower Shop E-commerce Website" },
    { src: "/portfolio/8.jpg", title: "Hair Studio Website" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [index, setIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Testimonials Auto Rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Stats Counter Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, idx) => {
              if (stat.target <= 5) {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[idx] = stat.target;
                  return updated;
                });
              } else {
                let start = 0;
                const end = stat.target;
                const duration = 1500;
                const stepTime = Math.max(Math.floor(duration / end), 20);

                const timer = setInterval(() => {
                  start += 1;
                  setCounts((prev) => {
                    const updated = [...prev];
                    updated[idx] = start;
                    return updated;
                  });
                  if (start >= end) clearInterval(timer);
                }, stepTime);
              }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    const el = document.querySelector(".stats-grid");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (i) => setActiveFAQ(activeFAQ === i ? null : i);

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
            <h1>Websites That Grow Your Business</h1>
            <p>Custom, conversion-focused websites designed to attract clients, increase bookings, and boost sales.</p>
            <div className="hero-buttons">
              <a href="https://www.eshetdigital.com/get-started" className="btn btn-primary">
                Get Instant Quote
              </a>
              <a href="https://www.eshetdigital.com/book" className="btn btn-outline">
                Book a Free Call
              </a>
            </div>
            <div className="hero-trust">⭐⭐⭐⭐⭐ <span>Trusted by 50+ Businesses</span></div>
          </div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/images/hero-mockup.png"
              alt="Website mockup preview"
              loading="eager"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* ✅ הלוגואים אחרי כל ה-Hero על הרקע הכחול */}
        <div className="hero-logos-full">
          <TechLogos />
        </div>
      </section>

      {/* ===== UX Benefits Section ===== */}
      <section className="ux-benefits">
        <h2>Better User Experience = Better Results</h2>
        <p className="ux-subtitle">
          We design every website with your users in mind – because when visitors enjoy the journey, 
          they become loyal customers.
        </p>
        <div className="ux-grid">
          <motion.div whileHover={{ y: -8, scale: 1.03 }} className="ux-card">
            <Smartphone size={64} className="ux-icon" />
            <h3>Designed for Any Device</h3>
            <p>Reach every customer with seamless browsing on phones, tablets, and desktops.</p>
          </motion.div>
          <motion.div whileHover={{ y: -8, scale: 1.03 }} className="ux-card">
            <Zap size={64} className="ux-icon" />
            <h3>Lightning-Fast Performance</h3>
            <p>Optimized speed to keep users engaged and reduce bounce rates.</p>
          </motion.div>
          <motion.div whileHover={{ y: -8, scale: 1.03 }} className="ux-card">
            <Target size={64} className="ux-icon" />
            <h3>Built to Convert</h3>
            <p>Clear calls-to-action that turn visitors into paying clients.</p>
          </motion.div>
          <motion.div whileHover={{ y: -8, scale: 1.03 }} className="ux-card">
            <Shield size={64} className="ux-icon" />
            <h3>Safe & Inclusive by Design</h3>
            <p>Websites built with security, trust, and accessibility standards for all users.</p>
          </motion.div>
        </div>
      </section>

      {/* ===== Why Choose Us (Stats with Counter) ===== */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`stat-box ${stat.color}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3>{counts[i]}{stat.suffix}</h3>
              <p>{stat.label}</p>
              {stat.note && <small>{stat.note}</small>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Our Process ===== */}
      <DevelopmentWorkflow />

      {/* ===== Portfolio ===== */}
      <section className="portfolio">
        <h2>Our Portfolio – Custom Web Development Projects</h2>
        <div className="portfolio-grid">
          {portfolio.map((item, i) => (
            <motion.div
              key={i}
              className="portfolio-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="portfolio-image"
              />
              <h3>{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
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
                alt={`Photo of ${testimonials[index].name}`}
                loading="lazy"
              />
              <p>“{testimonials[index].text}”</p>
              <h4>⭐ ⭐ ⭐ ⭐ ⭐ <span>{testimonials[index].name}</span></h4>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="carousel-controls">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
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
            >
              <button
                className="faq-question"
                aria-expanded={activeFAQ === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => toggleFAQ(i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">
                  {activeFAQ === i ? "–" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {activeFAQ === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Get Started Form ===== */}
      <GetStartedForm />
    </div>
  );
}
