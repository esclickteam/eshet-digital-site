"use client";

import React, { useEffect } from "react";
import Head from "next/head"; // ✅ SEO
import "../development/development.css"; 
import ContentBurst from "../../../../components/ContentBurst";
import FAQ from "../../../../components/faq";

export default function ContentPage() {
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
        <title>Content Writing & Video Editing – Eshet Digital</title>
        <meta
          name="description"
          content="Eshet Digital creates SEO-friendly articles, marketing posts, scripts, and professional video editing – content that engages, converts, and grows your brand."
        />
        <meta
          name="keywords"
          content="Content Writing, Video Editing, SEO Articles, Marketing Posts, Scripts, Eshet Digital"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Content Writing & Video Editing – Eshet Digital" />
        <meta
          property="og:description"
          content="Content that engages and converts: SEO articles, posts, scripts, and professional video editing for your brand."
        />
        <meta
          property="og:url"
          content="https://www.eshetdigital.com/services/content-writing-video-editing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.eshetdigital.com/og-content.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content Writing & Video Editing – Eshet Digital" />
        <meta
          name="twitter:description"
          content="SEO-friendly articles and professional video editing that make your brand stand out and convert."
        />
        <meta
          name="twitter:image"
          content="https://www.eshetdigital.com/og-content.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Content Writing & Video Editing",
              provider: {
                "@type": "Organization",
                name: "Eshet Digital",
                url: "https://www.eshetdigital.com",
                logo: "https://www.eshetdigital.com/logo.png",
              },
              areaServed: { "@type": "Place", name: "Worldwide" },
              description:
                "Eshet Digital provides SEO-friendly articles, marketing posts, video scripts, and professional video editing – content that engages, converts, and grows your brand.",
            }),
          }}
        />
      </Head>

      {/* ✅ Page Content */}
      <section className="dev-section">
        <div className="container">
          {/* Hero */}
          <h1 className="dev-title gradient-text">
            Content Writing & Video Editing
          </h1>
          <p className="dev-intro">
            Content Writing & Video Editing – Content that Engages and Converts.
            We craft SEO articles, marketing posts, video scripts, and full
            editing tailored to your brand — ensuring your message is sharp,
            professional, and impactful.
          </p>

          {/* Burst Section */}
          <ContentBurst />

          {/* Blocks */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Marketing & SEO Content</h2>
                <p>
                  We create professional articles, marketing content, and posts
                  optimized with keywords in your industry. The goal: engage
                  readers while boosting your Google ranking.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/content-seo.jpg" alt="SEO Content" />
                </div>
              </div>
            </div>
          </div>

          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Video Scripts</h2>
                <p>
                  Every great video starts with a strong script. We write clear
                  and engaging scripts for ads, product videos, and social media
                  content.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/content-scripts.jpg" alt="Video Scripts" />
                </div>
              </div>
            </div>
          </div>

          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Professional Video Editing</h2>
                <p>
                  We edit your videos to look professional, smooth, and
                  brand-consistent — including titles, graphics, and eye-catching
                  effects.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/content-editing.jpg" alt="Video Editing" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Create Engaging Content
            </a>
          </div>

          {/* Features Grid */}
          <div className="features-section">
            <h2 className="features-title">
              What Makes Content Truly Engaging?
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon">📝</div>
                <h3>SEO-Friendly Articles</h3>
                <p>Content that improves search ranking and drives traffic.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🎯</div>
                <h3>Targeted Messaging</h3>
                <p>Copy tailored to your audience for maximum impact.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🎬</div>
                <h3>Powerful Video Scripts</h3>
                <p>Compelling storytelling that keeps viewers engaged.</p>
              </div>
              <div className="feature-card">
                <div className="icon">✂️</div>
                <h3>Smooth Editing</h3>
                <p>Professional cuts, graphics, and transitions.</p>
              </div>
              <div className="feature-card">
                <div className="icon">📈</div>
                <h3>Conversion-Oriented</h3>
                <p>Content designed to drive sales and business growth.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🌍</div>
                <h3>Cross-Platform Ready</h3>
                <p>Optimized for blogs, social media, and video platforms.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FAQ
            faqs={[
              {
                question: "How long does it take to create an article or video?",
                answer:
                  "Usually a few days, depending on length and complexity. Larger projects may take longer.",
              },
              {
                question: "How do you ensure the content fits my brand?",
                answer:
                  "We conduct in-depth research on your business, tone of voice, and target audience to make sure the content feels authentic to your brand.",
              },
              {
                question: "Do I need to provide footage for editing?",
                answer:
                  "Both options are possible — we can edit your existing videos or guide you in creating new ones.",
              },
              {
                question:
                  "Why is it important to combine writing and video editing?",
                answer:
                  "Written content drives SEO and traffic, while videos boost engagement and conversions — together they maximize results.",
              },
            ]}
          />

          {/* CTA (Footer) */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Create Engaging Content
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
