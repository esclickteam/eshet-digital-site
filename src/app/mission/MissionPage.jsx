"use client";
import React from "react";
import Head from "next/head"; // SEO
import "./mission.css";

export default function MissionPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Our Mission – Eshet Digital</title>
        <meta
          name="description"
          content="Discover Eshet Digital's mission: empowering businesses through design, technology, and marketing to drive real growth and long-term success."
        />
        <meta
          name="keywords"
          content="Eshet Digital Mission, Digital Strategy, Business Growth, Marketing Agency, Web Development, Branding"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Our Mission – Eshet Digital" />
        <meta
          property="og:description"
          content="At Eshet Digital, your success is our success. Explore how we combine creativity, technology, and strategy to fuel real business growth."
        />
        <meta property="og:url" content="https://www.eshetdigital.com/about/our-mission" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.eshetdigital.com/og-mission.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Mission – Eshet Digital" />
        <meta
          name="twitter:description"
          content="Eshet Digital’s mission: empowering businesses with digital solutions that deliver measurable growth."
        />
        <meta
          name="twitter:image"
          content="https://www.eshetdigital.com/og-mission.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Eshet Digital",
              url: "https://www.eshetdigital.com",
              logo: "https://www.eshetdigital.com/logo.png",
              sameAs: [
                "https://www.facebook.com/eshetdigital",
                "https://www.instagram.com/eshetdigital",
                "https://www.linkedin.com/company/eshetdigital"
              ],
              description:
                "Eshet Digital's mission is to help businesses thrive with a blend of creativity, technology, and marketing that drives measurable growth.",
              slogan: "Your success is our success.",
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <div className="mission-page">
        {/* Hero */}
        <section className="mission-hero">
          <h1 className="mission-title gradient-text">Our Mission</h1>
          <p className="mission-subtitle">
            Your success is our success. At <strong>Eshet Digital</strong>, we
            don’t measure achievements only by the websites we build or the
            campaigns we launch — we measure them by the growth of your business.
            Every project is a shared journey. When you thrive, we thrive.
          </p>
        </section>

        {/* Sections */}
        <section className="mission-section alt-bg">
          <h2>A Partnership, Not a Transaction</h2>
          <p>
            We believe digital success comes from collaboration. That’s why we
            don’t see our clients as “customers,” but as long-term partners.
            Together, we define your goals, sharpen your vision, and turn it into
            actionable strategies that deliver measurable results.
          </p>
        </section>

        <section className="mission-section">
          <h2>Driving Impact That Matters</h2>
          <p>
            A beautiful website or clever campaign is meaningless if it doesn’t
            move the needle for your business. Our mission is to deliver work that
            creates impact: more leads, stronger engagement, higher sales, and
            lasting customer trust.
          </p>
        </section>

        <section className="mission-section alt-bg">
          <h2>Innovation with Purpose</h2>
          <p>
            We combine creativity with technology to craft solutions that stand
            out. From custom website design to advanced marketing strategies,
            every decision we make is guided by one principle: innovation should
            serve your business goals, not just look good.
          </p>
        </section>

        <section className="mission-section">
          <h2>Built on Trust and Transparency</h2>
          <p>
            The digital world can feel overwhelming. That’s why we put honesty and
            transparency at the core of our process. We explain, we guide, and we
            share insights — so you always know where your project stands and
            where it’s going.
          </p>
        </section>

        <section className="mission-section alt-bg">
          <h2>Growing Together</h2>
          <p>
            Our mission is not about short-term wins — it’s about building a
            foundation for growth. We aim to be there with you as your business
            evolves, helping you adapt, scale, and stay ahead of the competition.
          </p>
        </section>

        {/* Closing */}
        <section className="mission-closing">
          <p>
            At the heart of Eshet Digital’s mission is a simple truth: when you
            succeed, we succeed. That belief fuels everything we do, every
            strategy we build, and every client relationship we cherish.
          </p>
        </section>
      </div>
    </>
  );
}
