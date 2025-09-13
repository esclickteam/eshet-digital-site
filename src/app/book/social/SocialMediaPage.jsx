"use client";

import React, { useEffect } from "react";
import Head from "next/head"; // ✅ SEO
import "../development/development.css"; 
import SocialBurst from "../../../../components/SocialBurst"; 
import FAQ from "../../../../components/faq";

export default function SocialMediaPage() {
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
        <title>Social Media Design & Content – Eshet Digital</title>
        <meta
          name="description"
          content="Custom social media content and design by Eshet Digital – posts, stories, and ads crafted to boost engagement, consistency, and growth."
        />
        <meta
          name="keywords"
          content="Social Media Design, Content Creation, Posts, Stories, Ads, Eshet Digital"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Social Media Design & Content – Eshet Digital" />
        <meta
          property="og:description"
          content="We design custom posts, stories, and banners that stand out and strengthen your brand across Facebook, Instagram, LinkedIn, and more."
        />
        <meta
          property="og:url"
          content="https://www.eshetdigital.com/services/social-media-design"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.eshetdigital.com/og-social.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Design & Content – Eshet Digital" />
        <meta
          name="twitter:description"
          content="Boost your online presence with unique posts, stories, and ad creatives tailored to your brand."
        />
        <meta
          name="twitter:image"
          content="https://www.eshetdigital.com/og-social.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Social Media Design & Content",
              provider: {
                "@type": "Organization",
                name: "Eshet Digital",
                url: "https://www.eshetdigital.com",
                logo: "https://www.eshetdigital.com/logo.png",
              },
              areaServed: { "@type": "Place", name: "Worldwide" },
              description:
                "Eshet Digital provides custom social media design and content creation – unique posts, stories, and ads to boost engagement and brand growth.",
            }),
          }}
        />
      </Head>

      {/* ✅ Page Content */}
      <section className="dev-section">
        <div className="container">
          {/* Hero */}
          <h1 className="dev-title gradient-text">Social Media Design & Content</h1>
          <p className="dev-intro">
            Social Media Design & Content – Stand Out and Connect. We create
            custom posts, stories, and banners tailored to your brand, designed to
            boost engagement and strengthen your online presence.
          </p>

          {/* Social Burst */}
          <SocialBurst />

          {/* Blocks */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Custom Content</h2>
                <p>
                  We don’t use generic templates – we craft unique content that
                  reflects your brand’s voice.
                </p>
                <ul>
                  <li>✔ Marketing posts</li>
                  <li>✔ Interactive stories</li>
                  <li>✔ Targeted banners & ads</li>
                </ul>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/social-content.jpg" alt="Custom Content" />
                </div>
              </div>
            </div>
          </div>

          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Standout Design</h2>
                <p>
                  In a fast-scrolling world, design is the difference between
                  being ignored and being noticed. We combine colors, typography,
                  and graphics that create a powerful visual presence.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/social-design.jpg" alt="Standout Design" />
                </div>
              </div>
            </div>
          </div>

          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Data-Driven Strategy</h2>
                <p>
                  Beyond design, we analyze performance and create content based
                  on insights and data. This ensures higher engagement and
                  conversions month after month.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/social-strategy.jpg" alt="Data Strategy" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Boost Your Social Media
            </a>
          </div>

          {/* Features Grid */}
          <div className="features-section">
            <h2 className="features-title">
              What Makes Social Media Truly Effective?
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon">✍️</div>
                <h3>Unique Content</h3>
                <p>Custom posts and stories tailored to your brand’s voice.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🎨</div>
                <h3>Creative Design</h3>
                <p>Eye-catching visuals that stand out in busy feeds.</p>
              </div>
              <div className="feature-card">
                <div className="icon">📊</div>
                <h3>Data Insights</h3>
                <p>Performance tracking and optimization for better results.</p>
              </div>
              <div className="feature-card">
                <div className="icon">⚡</div>
                <h3>Engagement Growth</h3>
                <p>Strategies that boost interactions and follower retention.</p>
              </div>
              <div className="feature-card">
                <div className="icon">📢</div>
                <h3>Ad Campaign Support</h3>
                <p>Professional creatives designed for paid campaigns.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🌍</div>
                <h3>Cross-Platform Consistency</h3>
                <p>Unified design across Facebook, Instagram, and more.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FAQ
            faqs={[
              {
                question: "How many posts are included in a monthly package?",
                answer:
                  "We offer different plans – starting from 8 posts per month up to full content management packages.",
              },
              {
                question: "Can I get stories in addition to posts?",
                answer:
                  "Absolutely. Our packages include custom-designed stories as well.",
              },
              {
                question: "Why is social media design important?",
                answer:
                  "Because it’s the difference between amateur content that gets skipped and a professional brand that builds trust and results.",
              },
              {
                question: "Do you design creatives for paid campaigns?",
                answer:
                  "Yes. We create unique creatives tailored for paid campaigns on Facebook, Instagram, LinkedIn, and Google.",
              },
              {
                question:
                  "Can you keep brand consistency between my website, logo, and social media?",
                answer:
                  "Definitely. We create a unified visual identity that aligns across all digital platforms.",
              },
            ]}
          />

          {/* CTA (Footer) */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Boost Your Social Media
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
