"use client";

import React, { useEffect } from "react";
import Head from "next/head"; // ✅ SEO
import CampaignBurst from "../../../../components/CampaignBurst";
import "../development/development.css";
import FAQ from "../../../../components/faq";

export default function DigitalCampaignsPage() {
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
        <title>Digital Campaign Management – Eshet Digital</title>
        <meta
          name="description"
          content="Eshet Digital runs data-driven campaigns on Facebook, Instagram & Google – delivering more leads, sales, and measurable ROI."
        />
        <meta
          name="keywords"
          content="Digital Campaigns, Facebook Ads, Instagram Ads, Google Ads, PPC, Online Marketing, Eshet Digital"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Digital Campaign Management – Eshet Digital" />
        <meta
          property="og:description"
          content="Smart campaigns that deliver real results – more leads, sales, and long-term business growth."
        />
        <meta
          property="og:url"
          content="https://www.eshetdigital.com/services/digital-campaigns"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.eshetdigital.com/og-campaigns.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Campaign Management – Eshet Digital" />
        <meta
          name="twitter:description"
          content="Eshet Digital creates campaigns across Facebook, Instagram & Google – optimized for performance and ROI."
        />
        <meta
          name="twitter:image"
          content="https://www.eshetdigital.com/og-campaigns.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Digital Campaign Management",
              provider: {
                "@type": "Organization",
                name: "Eshet Digital",
                url: "https://www.eshetdigital.com",
                logo: "https://www.eshetdigital.com/logo.png",
              },
              areaServed: { "@type": "Place", name: "Worldwide" },
              description:
                "Eshet Digital manages digital campaigns across Facebook, Instagram, Google & more – delivering measurable growth, ROI, and new customers.",
            }),
          }}
        />
      </Head>

      {/* ✅ Page Content */}
      <section className="dev-section">
        <div className="container">
          {/* ===== Hero ===== */}
          <h1 className="dev-title gradient-text">
            Digital Campaign Management that Delivers Results
          </h1>
          <p className="dev-intro">
            We run smart campaigns on Facebook, Instagram, Google, and beyond —
            using data-driven strategies, creative content, and continuous
            optimization. Our goal: generate more leads, more sales, and real
            business growth.
          </p>

          {/* ===== Campaign Burst ===== */}
          <CampaignBurst />

          {/* ===== Block 1 ===== */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Data-Driven Strategy</h2>
                <p>
                  We don’t guess — we analyze. Every campaign is built on audience
                  research, competitor insights, and strategic planning.
                </p>
                <ul>
                  <li>✔ Target audience identification</li>
                  <li>✔ Precise segmentation</li>
                  <li>✔ Continuous tracking & insights</li>
                </ul>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img
                    src="/images/campaign-strategy.jpg"
                    alt="Campaign Strategy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== Block 2 ===== */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Creatives that Convert</h2>
                <p>
                  Great ads aren’t just pretty — they convert. We craft unique
                  creatives that combine compelling copy, visuals, and strong
                  calls-to-action.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/campaign-creatives.jpg" alt="Creatives" />
                </div>
              </div>
            </div>
          </div>

          {/* ===== Block 3 ===== */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Continuous Optimization</h2>
                <p>
                  A well-managed campaign never stands still. We perform daily
                  optimizations to ensure you get the maximum ROI from your
                  budget.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img
                    src="/images/campaign-optimization.jpg"
                    alt="Optimization"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== Block 4 ===== */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Results that Speak for Themselves</h2>
                <p>
                  At the end of the day — results matter. We track performance,
                  provide clear transparent reports, and ensure every dollar works
                  for you.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/campaign-results.jpg" alt="Results" />
                </div>
              </div>
            </div>
          </div>

          {/* ===== CTA ===== */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Launch Your Campaign
            </a>
          </div>

          {/* ===== Features Grid ===== */}
          <div className="features-section">
            <h2 className="features-title">
              What Makes a Campaign Truly Successful?
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon">📊</div>
                <h3>Data-Driven Strategy</h3>
                <p>
                  Every campaign starts with solid research — audience insights,
                  competitor analysis, and measurable goals.
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">🎨</div>
                <h3>Creative That Converts</h3>
                <p>
                  Ads designed to capture attention and drive action — with
                  compelling visuals and strong copy.
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">💰</div>
                <h3>Smart Budget Allocation</h3>
                <p>
                  Maximize ROI by investing in the right platforms: Facebook,
                  Instagram, Google, LinkedIn.
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">⚡</div>
                <h3>Continuous Optimization</h3>
                <p>
                  Campaigns are tracked daily — with A/B testing, targeting tweaks,
                  and performance improvements.
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">📑</div>
                <h3>Transparent Reporting</h3>
                <p>
                  Clear, easy-to-understand reports: clicks, leads, conversions,
                  and ROI.
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">🚀</div>
                <h3>Real Business Growth</h3>
                <p>
                  More than just ads — campaigns that deliver new customers,
                  higher sales, and long-term impact.
                </p>
              </div>
            </div>
          </div>

          {/* ===== FAQ ===== */}
          <FAQ
            faqs={[
              {
                question: "How long does it take to see results?",
                answer:
                  "Results vary by industry and budget. You’ll often see initial results within the first month, with significant improvements after ongoing optimization.",
              },
              {
                question: "What’s the minimum budget to start?",
                answer:
                  "We recommend starting with a budget of $1,000–$1,500 per month to allow proper testing and optimization.",
              },
              {
                question: "Where should I advertise — Facebook, Instagram, or Google?",
                answer:
                  "It depends on your product and audience. We analyze where your customers are and allocate budget accordingly.",
              },
              {
                question: "How long should a campaign run before knowing if it’s successful?",
                answer:
                  "Digital campaigns can’t be measured in just a few days. Typically, at least 4–6 weeks of activity, testing, and optimization are needed to draw reliable conclusions.",
              },
              {
                question: "Why hire an agency instead of managing campaigns alone?",
                answer:
                  "Managing campaigns alone often leads to wasted spend on trial-and-error. An agency brings expertise, experience, and advanced tools to maximize ROI.",
              },
              {
                question: "How do we know the campaign is successful?",
                answer:
                  "We provide detailed, transparent reports — including clicks, leads, cost-per-acquisition, and real ROI tracking.",
              },
            ]}
          />

          {/* ===== CTA (Footer) ===== */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Launch Your Campaign
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
