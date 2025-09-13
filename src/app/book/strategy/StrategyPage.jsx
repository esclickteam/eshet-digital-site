"use client";

import React, { useEffect } from "react";
import Head from "next/head"; // ✅ SEO
import "../development/development.css"; 
import StrategyBurst from "../../../../components/StrategyBurst"; 
import FAQ from "../../../../components/faq";

export default function StrategyPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    document
      .querySelectorAll(".dev-block, .feature-card, .faq-section, .cta-wrapper")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Digital Strategy & Maintenance – Eshet Digital</title>
        <meta
          name="description"
          content="Eshet Digital provides tailored digital strategies and ongoing website maintenance – keeping your business secure, optimized, and ready for growth."
        />
        <meta
          name="keywords"
          content="Digital Strategy, Website Maintenance, Consulting, Security, Optimization, Eshet Digital"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Digital Strategy & Maintenance – Eshet Digital" />
        <meta
          property="og:description"
          content="From smart digital strategies to ongoing maintenance, Eshet Digital keeps your website secure, fast, and always performing."
        />
        <meta
          property="og:url"
          content="https://www.eshetdigital.com/services/digital-strategy-maintenance"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.eshetdigital.com/og-strategy.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Strategy & Maintenance – Eshet Digital" />
        <meta
          name="twitter:description"
          content="Ongoing website support, optimization, and strategy to secure your business future."
        />
        <meta
          name="twitter:image"
          content="https://www.eshetdigital.com/og-strategy.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Digital Strategy & Maintenance",
              provider: {
                "@type": "Organization",
                name: "Eshet Digital",
                url: "https://www.eshetdigital.com",
                logo: "https://www.eshetdigital.com/logo.png",
              },
              areaServed: { "@type": "Place", name: "Worldwide" },
              description:
                "Eshet Digital provides tailored digital strategies and ongoing website maintenance – keeping your business secure, optimized, and ready for growth.",
            }),
          }}
        />
      </Head>

      {/* ✅ Page Content */}
      <section className="dev-section">
        <div className="container">
          {/* Hero */}
          <h1 className="dev-title gradient-text">
            Digital Strategy & Maintenance
          </h1>
          <p className="dev-intro">
            We don’t just build websites — we make sure they keep growing,
            performing, and protecting your business. From smart strategies to
            ongoing technical maintenance, we’re with you every step of the way.
          </p>

          {/* Burst Section */}
          <StrategyBurst />

          {/* Blocks */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Custom Strategy</h2>
                <p>
                  Every business is unique — so should be its digital strategy. We
                  create custom plans that support your business goals.
                </p>
                <ul>
                  <li>✔ Market & competitor analysis</li>
                  <li>✔ Target audience mapping</li>
                  <li>✔ Data-driven marketing plans</li>
                </ul>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/strategy-custom.jpg" alt="Custom Strategy" />
                </div>
              </div>
            </div>
          </div>

          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Website Maintenance</h2>
                <p>
                  Your website must always perform — fast, secure, and error-free.
                  Our maintenance services cover:
                </p>
                <ul>
                  <li>✔ Software & plugin updates</li>
                  <li>✔ Security monitoring & threat detection</li>
                  <li>✔ Automated backups & recovery</li>
                </ul>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img
                    src="/images/strategy-maintenance.jpg"
                    alt="Website Maintenance"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Consulting & Support</h2>
                <p>
                  We’re here for you with expert consulting, support, and upgrades.
                  Our team makes sure you always stay ahead in the digital game.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img
                    src="/images/strategy-support.jpg"
                    alt="Consulting & Support"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Secure Your Digital Future
            </a>
          </div>

          {/* Features Grid */}
          <div className="features-section">
            <h2 className="features-title">
              What Makes a Digital Strategy Effective?
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon">📊</div>
                <h3>Data-Driven Strategy</h3>
                <p>Build plans based on insights, not guesses.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🛡</div>
                <h3>Strong Security</h3>
                <p>Advanced protection against online threats.</p>
              </div>
              <div className="feature-card">
                <div className="icon">⚡</div>
                <h3>Performance Optimization</h3>
                <p>Keep your site fast, responsive, and reliable.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🔄</div>
                <h3>Continuous Updates</h3>
                <p>Regular plugin, software, and content updates.</p>
              </div>
              <div className="feature-card">
                <div className="icon">💡</div>
                <h3>Expert Consulting</h3>
                <p>Guidance to adapt and grow digitally.</p>
              </div>
              <div className="feature-card">
                <div className="icon">📈</div>
                <h3>Scalable Growth</h3>
                <p>Future-proof systems designed for long-term success.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FAQ
            faqs={[
              {
                question: "Why is ongoing website maintenance important?",
                answer:
                  "Without maintenance, websites can suffer from security risks, slower performance, and poor user experience.",
              },
              {
                question: "Does maintenance include content updates?",
                answer:
                  "Yes, it can include content updates, blogs, and fresh information.",
              },
              {
                question: "How do you protect my website from hacks?",
                answer:
                  "We apply advanced security layers, continuous monitoring, and regular backups.",
              },
              {
                question: "How long does it take to implement a new digital strategy?",
                answer:
                  "It depends on your website’s complexity and business goals, but in most cases, you can see initial results within a few weeks.",
              },
            ]}
          />

          {/* CTA (Footer) */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Secure Your Digital Future
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
