"use client";
import React from "react";
import Head from "next/head"; // SEO tags
import "./team.css";

export default function TeamPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Our Team – Eshet Digital</title>
        <meta
          name="description"
          content="Meet the team at Eshet Digital – creative designers, developers, and strategists combining technology and marketing to deliver results."
        />
        <meta
          name="keywords"
          content="Eshet Digital Team, Digital Agency, Designers, Developers, Marketing Strategists"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Our Team – Eshet Digital" />
        <meta
          property="og:description"
          content="The driving force behind Eshet Digital: creators, developers, and strategists delivering real results."
        />
        <meta property="og:url" content="https://www.eshetdigital.com/about/our-team" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.eshetdigital.com/og-team.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team – Eshet Digital" />
        <meta
          name="twitter:description"
          content="Meet Eshet Digital's creative team of designers, developers, and strategists."
        />
        <meta
          name="twitter:image"
          content="https://www.eshetdigital.com/og-team.jpg"
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
              employee: [
                {
                  "@type": "Person",
                  name: "Creative Designers",
                  jobTitle: "Design Team",
                },
                {
                  "@type": "Person",
                  name: "Developers",
                  jobTitle: "Web Development Team",
                },
                {
                  "@type": "Person",
                  name: "Strategists",
                  jobTitle: "Marketing Strategy Team",
                }
              ],
              description:
                "Meet the Eshet Digital team – a group of designers, developers, and strategists combining creativity, technology, and marketing.",
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <div className="team-page">
        {/* Hero */}
        <section className="team-hero">
          <h1 className="team-title gradient-text">Our Team</h1>
          <p className="team-subtitle">
            The driving force behind <strong>Eshet Digital</strong>.  
            A group of creators, developers, and strategists who combine  
            creativity, technology, and marketing to deliver real results.
          </p>
        </section>

        {/* Sections */}
        <section className="team-section alt-bg">
          <h2>Who We Are</h2>
          <p>
            We are digital creators, designers, and strategists. Each of us brings
            unique expertise — from web development and branding to marketing and
            content creation. Together, we deliver complete digital solutions.
          </p>
        </section>

        <section className="team-section">
          <h2>How We Work</h2>
          <p>
            We listen, analyze, and plan. Every project is guided by strategy,
            transparency, and uncompromising quality — from concept to launch.
          </p>
        </section>

        <section className="team-section alt-bg">
          <h2>Our Core Values</h2>
          <p>
            Creativity, professionalism, results, and transparency are at the
            heart of everything we do. These principles drive every project we
            deliver.
          </p>
        </section>

        <section className="team-section">
          <h2>Why Choose Us</h2>
          <p>
            We blend modern design with cutting-edge technology. Whether for small
            businesses or large organizations, we provide tailored solutions using
            WordPress, Shopify, Wix, React, Next.js, and more.
          </p>
        </section>

        <section className="team-section alt-bg">
          <h2>What This Means for You</h2>
          <p>
            Partnering with us means gaining a dedicated team that transforms
            ideas into live digital products and ensures your brand stands out in
            a competitive market.
          </p>
        </section>
      </div>
    </>
  );
}
