"use client";

import { useEffect } from "react";
import Head from "next/head"; // ✅ הוספת SEO
import LaptopBurst from "../../../../components/LaptopBurst";
import "./development.css";
import FAQ from "../../../../components/faq";

export default function DevelopmentPage() {
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
        <title>Custom Website Development – Eshet Digital</title>
        <meta
          name="description"
          content="Eshet Digital builds custom websites with WordPress, Shopify, React & Next.js – fast, responsive, and SEO-optimized to grow your business."
        />
        <meta
          name="keywords"
          content="Custom Website Development, Web Design, WordPress, Shopify, React, Next.js, Eshet Digital"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Custom Website Development – Eshet Digital" />
        <meta
          property="og:description"
          content="Transform your ideas into winning websites – fast, beautifully designed, and built to drive business growth."
        />
        <meta
          property="og:url"
          content="https://www.eshetdigital.com/services/website-development"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.eshetdigital.com/og-development.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Website Development – Eshet Digital" />
        <meta
          name="twitter:description"
          content="Websites built with WordPress, Shopify & Next.js – optimized for speed, design, and growth."
        />
        <meta
          name="twitter:image"
          content="https://www.eshetdigital.com/og-development.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Custom Website Development",
              provider: {
                "@type": "Organization",
                name: "Eshet Digital",
                url: "https://www.eshetdigital.com",
                logo: "https://www.eshetdigital.com/logo.png",
              },
              areaServed: {
                "@type": "Place",
                name: "Worldwide",
              },
              description:
                "Eshet Digital specializes in building custom websites with WordPress, Shopify, React & Next.js – optimized for speed, SEO, and conversions.",
            }),
          }}
        />
      </Head>

      {/* ✅ Page Content */}
      <section className="dev-section">
        <div className="container">
          {/* Hero */}
          <h1 className="dev-title gradient-text">
            Custom Website Development Tailored to Your Business
          </h1>
          <p className="dev-intro">
            At <strong>Eshet Digital</strong>, we transform ideas into winning
            websites – fast, beautifully designed, and built to drive action. <br />
            Because your website isn’t just an online presence – it’s your digital home,
            telling your brand’s story and connecting you with your customers.
          </p>
          <LaptopBurst />

          {/* ===== Block 1 – UX ===== */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Stunning Design Meets Seamless User Experience (UX)</h2>
                <p>We combine modern, elegant design with a user-first approach:</p>
                <ul>
                  <li>⚡ Fast loading</li>
                  <li>🎯 Effortless navigation</li>
                  <li>♿ Accessibility</li>
                  <li>🖥️ Clear layouts</li>
                </ul>
                <p>
                  Every detail is designed to keep visitors engaged and ready to convert.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/dev-ux.png" alt="UX Design" />
                </div>
              </div>
            </div>
          </div>

          {/* ===== Block 2 – Technologies ===== */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Technologies That Drive You Forward</h2>
                <p>We build with the world’s most advanced tools:</p>
                <ul>
                  <li>• WordPress</li>
                  <li>• Wix</li>
                  <li>• Shopify</li>
                  <li>• React, Next.js, Node.js</li>
                  <li>• Custom code solutions</li>
                </ul>
                <p>The right technology – for the right website.</p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/dev-tech.png" alt="Technologies" />
                </div>
              </div>
            </div>
          </div>

          {/* ===== Block 3 – Optimization ===== */}
          <div className="dev-block">
            <div className="block-content">
              <div className="block-text">
                <h2>Websites Engineered for Performance & Growth</h2>
                <p>Beyond design, we ensure full optimization:</p>
                <ul>
                  <li>🚀 Lightning-fast performance</li>
                  <li>📱 Mobile-friendly responsiveness</li>
                  <li>🔍 SEO foundations</li>
                  <li>📊 Built-in analytics</li>
                </ul>
                <p>
                  The result: a data-driven website that grows your revenue.
                </p>
              </div>
              <div className="block-image">
                <div className="image-wrapper">
                  <img src="/images/dev-growth.png" alt="Performance & Growth" />
                </div>
              </div>
            </div>
          </div>

          {/* ===== CTA ===== */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Start Your Project
            </a>
          </div>

          {/* ===== Features Grid ===== */}
          <div className="features-section">
            <h2 className="features-title">What Makes a Website Truly Outstanding?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon">🚀</div>
                <h3>Lightning-Fast Performance</h3>
                <p>A fast website increases conversions, improves UX, and boosts Google ranking.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🎨</div>
                <h3>Tailor-Made Design</h3>
                <p>Every business is unique – your website should reflect your brand identity.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🔒</div>
                <h3>Security & Reliability</h3>
                <p>We implement advanced security layers to keep your website safe & stable.</p>
              </div>
              <div className="feature-card">
                <div className="icon">📈</div>
                <h3>SEO Optimization</h3>
                <p>We build with solid SEO foundations to help you climb higher in search results.</p>
              </div>
              <div className="feature-card">
                <div className="icon">📱</div>
                <h3>Fully Responsive Design</h3>
                <p>Your site looks flawless on mobile, tablet, or desktop – everywhere.</p>
              </div>
              <div className="feature-card">
                <div className="icon">⚡</div>
                <h3>Cutting-Edge Technologies</h3>
                <p>From WordPress & Shopify to React & Next.js – we use the right tech.</p>
              </div>
            </div>
          </div>

          {/* ===== FAQ Section ===== */}
          <FAQ
            faqs={[
              {
                question: "How long does it take to build a website?",
                answer:
                  "It depends on the size and complexity of the project – a simple showcase website can be ready in 2–3 weeks, an advanced online store may take 6–10 weeks, and fully custom-built platforms can take longer depending on requirements.",
              },
              {
                question: "Will my website be mobile-friendly?",
                answer:
                  "Absolutely! Every website we build is fully responsive across mobile, tablet, and desktop.",
              },
              {
                question: "Do you take care of SEO as well?",
                answer:
                  "Yes. We implement strong technical SEO foundations during development so your site is ready to rank on Google from day one.",
              },
              {
                question: "What if I need updates or changes later on?",
                answer:
                  "We provide ongoing maintenance and upgrades to ensure your website grows with your business.",
              },
              {
                question: "Can you integrate external systems (payment, CRM, etc.)?",
                answer:
                  "Of course. We integrate payment gateways, CRMs, email marketing, and other tools tailored to your needs.",
              },
              {
                question:
                  "What’s the difference between building a website on Wix/WordPress and a custom-coded website?",
                answer:
                  "Platforms like Wix and WordPress provide quick, affordable solutions – perfect for small businesses or basic showcase websites that need to go live fast. A custom-coded website, on the other hand, gives you full control over every detail – design, functionality, performance, and advanced integrations. It’s the ideal choice for businesses that want a unique, scalable website built for long-term growth.",
              },
            ]}
          />

          {/* ===== CTA (Footer) ===== */}
          <div className="cta-wrapper">
            <a href="/get-started" className="cta-button">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
