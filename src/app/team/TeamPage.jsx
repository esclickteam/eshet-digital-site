"use client";
import React from "react";
import "./team.css";

export default function TeamPage() {
  return (
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
  );
}
