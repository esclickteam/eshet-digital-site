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
          <span> creativity</span>, <span>technology</span>, and <span>marketing</span>  
          to deliver real results.
        </p>
      </section>

      {/* Section 1 */}
      <section className="team-section">
        <h2>👥 Who We Are</h2>
        <p>
          We are digital creators, designers, and strategists. Each of us brings
          unique expertise — from web development and branding to marketing and
          content creation. Together, we deliver complete digital solutions.
        </p>
      </section>

      {/* Section 2 */}
      <section className="team-section">
        <h2>⚙️ How We Work</h2>
        <p>
          We listen, analyze, and plan. Every project is guided by strategy,
          transparency, and uncompromising quality — from concept to launch.
        </p>
      </section>

      {/* Section 3 */}
      <section className="team-section">
        <h2>💡 Our Core Values</h2>
        <ul>
          <li>🎨 Creativity – unique designs and bold ideas</li>
          <li>💻 Professionalism – no compromise on quality</li>
          <li>📊 Results – strategies built to grow businesses</li>
          <li>🤝 Transparency – clear communication, full trust</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="team-section">
        <h2>🌍 Why Choose Us</h2>
        <p>
          We blend design with technology, delivering solutions for small
          businesses and large organizations alike. We use tools like
          WordPress, Shopify, Wix, React, and Next.js to ensure top results.
        </p>
      </section>

      {/* Section 5 */}
      <section className="team-section">
        <h2>🚀 What This Means for You</h2>
        <p>
          Partnering with us means more than a service provider. You gain a
          dedicated team that transforms ideas into live products and helps your
          brand stand out in a competitive market.
        </p>
      </section>
    </div>
  );
}
