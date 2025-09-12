"use client";

import React from "react";
import { motion } from "framer-motion";
import "./tech.css";

const sections = [
  {
    title: "🛍️ E-Commerce",
    desc: "We build scalable online stores with the world’s most popular platforms.",
    logos: [
      "/icons/woocommerce.svg",
      "/icons/shopify.svg",
      "/icons/magento.svg",
      "/icons/bigcommerce.svg",
    ],
  },
  {
    title: "🌐 Front-end",
    desc: "Modern frameworks for sleek, fast, and responsive user interfaces.",
    logos: [
      "/icons/react.svg",
      "/icons/nextjs.svg",
      "/icons/vue.svg",
      "/icons/angular.svg",
      "/icons/tailwindcss.svg",
    ],
  },
  {
    title: "⚙️ Back-end",
    desc: "Powerful server-side technologies for APIs, logic, and scalability.",
    logos: [
      "/icons/nodejs.svg",
      "/icons/php.svg",
      "/icons/python.svg",
      "/icons/laravel.svg",
      "/icons/django.svg",
    ],
  },
  {
    title: "🔒 Hosting & Security",
    desc: "Reliable hosting and top-tier security to keep your business online 24/7.",
    logos: [
      "/icons/vercel.svg",
      "/icons/netlify.svg",
      "/icons/cloudflare.svg",
      "/icons/ssl.svg",
    ],
  },
  {
    title: "☁️ Cloud & DevOps",
    desc: "From deployment to scaling — cloud and DevOps tools we trust.",
    logos: [
      "/icons/aws.svg",
      "/icons/azure.svg",
      "/icons/googlecloud.svg",
      "/icons/docker.svg",
      "/icons/kubernetes.svg",
    ],
  },
  {
    title: "📰 CMS Platforms",
    desc: "Content management made simple, flexible, and powerful.",
    logos: [
      "/icons/wordpress.svg",
      "/icons/wix.svg",
      "/icons/webflow.svg",
      "/icons/squarespace.svg",
      "/icons/drupal.svg",
    ],
  },
];

export default function TechPage() {
  return (
    <div className="tech-page">
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="animated-title">
          Technologies That Power <span className="highlight">Success</span>
        </h1>
        <p>
          We combine reliable, modern, and scalable technologies to build
          digital solutions tailored to your business goals.
        </p>
      </motion.section>

      {sections.map((sec, i) => (
        <section className="tech-section" key={i}>
          <div className="tech-text">
            <h2>{sec.title}</h2>
            <p>{sec.desc}</p>
          </div>

          {/* שתי שורות של לוגואים נעים */}
          <div className="logos-wrapper">
            <div className="logos-row left">
              {sec.logos.concat(sec.logos).map((logo, j) => (
                <div className="logo-card" key={`left-${j}`}>
                  <img src={logo} alt="tech logo" />
                </div>
              ))}
            </div>

            <div className="logos-row right">
              {sec.logos.concat(sec.logos).map((logo, j) => (
                <div className="logo-card" key={`right-${j}`}>
                  <img src={logo} alt="tech logo" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
