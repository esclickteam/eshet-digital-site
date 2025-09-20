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
              Build Websites <span className="highlight">That Convert</span>
            </h1>
            <p>
              Professional website design & development services tailored to
              your business. Enhance user experience, improve rankings, and
              drive results with responsive sites.
            </p>
            <div className="hero-cta">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Book a Free Call
              </motion.a>
              <motion.a
                href="#portfolio"
                className="btn-secondary"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                📊 View Portfolio
              </motion.a>
            </div>
            <p className="trust">⭐ Trusted by 50+ Businesses</p>
          </motion.div>

          {/* תמונה / איור בצד ימין */}
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
              title: "100+ Projects",
              text: "Delivered successfully for clients worldwide."
            },
            {
              icon: "/icons/Mobile.svg",
              title: "95% Satisfaction",
              text: "Most of our clients return for more projects."
            },
            {
              icon: "/icons/Speed.svg",
              title: "2–4 Weeks Delivery",
              text: "Average turnaround time per website."
            },
            {
              icon: "/icons/Support.svg",
              title: "⭐ Dedicated Team",
              text: "Guidance from design to launch & support."
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
              caption: "Clinic Website – React + SEO",
              result: "+200% Leads"
            },
            {
              src: "/portfolio/site2.jpg",
              alt: "Ecommerce website project",
              caption: "Ecommerce Store – WooCommerce",
              result: "+150% Sales"
            },
            {
              src: "/portfolio/site3.jpg",
              alt: "Custom website design project",
              caption: "Custom Website – Branding Focus",
              result: "Increased Engagement"
            }
          ].map((item, i) => (
            <motion.figure
              key={i}
              className="portfolio-item"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.src} alt={item.alt} />
              <figcaption>
                <h4>{item.caption}</h4>
                <p>{item.result}</p>
                <a href="#">View Case Study →</a>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <motion.div
          className="testimonial-carousel"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              name: "John D.",
              text: "Eshet Digital doubled our leads in just 2 months!",
              stars: 5
            },
            {
              name: "Sarah M.",
              text: "Our ecommerce sales skyrocketed – highly recommend.",
              stars: 5
            }
          ].map((t, i) => (
            <motion.blockquote
              key={i}
              className="testimonial"
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              <p>“{t.text}”</p>
              <footer>
                {"⭐".repeat(t.stars)} – {t.name}
              </footer>
            </motion.blockquote>
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
              q: "What if I already have a website?",
              a: "We can redesign or upgrade your existing site with zero downtime."
            },
            {
              q: "What if I’m not satisfied?",
              a: "We provide revisions until you’re happy + 30-day post-launch support."
            }
          ].map((item, i) => (
            <motion.details key={i} className="faq-item" variants={item}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="final-cta">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Build a Website That Works?
        </motion.h2>
        <div className="cta-buttons">
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Book a Free Call
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📊 Get Instant Quote
          </motion.a>
        </div>
        <p className="urgency">⚡ Limited Spots This Month – Reserve Yours Today</p>
      </section>
    </div>
  );
}
