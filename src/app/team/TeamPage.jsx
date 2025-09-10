"use client";
import React from "react";
import "./team.css";

export default function TeamPage() {
  return (
    <div className="service-page">
      {/* Hero / Intro */}
      <section className="hero">
        <h1>Our Team</h1>
        <p>
          The Team Behind Eshet Digital. We believe that a strong team is the
          heart of every successful project. At Eshet Digital, we combine
          experience, creativity, and passion to deliver digital solutions that
          generate real results for businesses.
        </p>
      </section>

      {/* Blocks */}
      <section className="blocks">
        <div className="block">
          <h2>👥 Who We Are</h2>
          <p>
            We are digital creators, designers, and strategists. Each of us
            brings unique expertise—graphic design, web development, technology,
            marketing strategy, and content creation. Together, we build
            complete digital experiences that combine creativity with
            technology.
          </p>
        </div>

        <div className="block">
          <h2>⚙️ How We Work</h2>
          <p>
            We work as full partners with our clients. We listen carefully to
            your needs, analyze your target audience, craft a precise strategy,
            and guide the process from idea to launch. Every stage is managed
            with transparency, attention to deadlines, and uncompromising
            quality.
          </p>
        </div>

        <div className="block">
          <h2>💡 Our Core Values</h2>
          <ul>
            <li>🎨 Creativity – Always think differently, design uniquely, and deliver user experiences that stand out.</li>
            <li>💻 Professionalism – No compromises when it comes to design, development, and content quality.</li>
            <li>📊 Results – Not just beautiful websites, but platforms that drive leads and sales.</li>
            <li>🤝 Transparency – Open communication, trust, and true partnership with every client.</li>
          </ul>
        </div>

        <div className="block">
          <h2>🌍 Why Choose Us</h2>
          <ul>
            <li>We blend modern design with cutting-edge technology.</li>
            <li>We deliver tailored solutions for both small businesses and large organizations.</li>
            <li>We treat every project as if it were our own—until the results feel just right.</li>
            <li>We work with industry-leading tools: WordPress, Shopify, Wix, React, Next.js, and more.</li>
          </ul>
        </div>

        <div className="block">
          <h2>🚀 What This Means for You</h2>
          <p>
            When you partner with us, you get more than a service provider—you
            gain a dedicated team that thinks with you, plans with you, and
            pushes your business forward. We transform ideas into live digital
            products and give your brand the tools it needs to stand out in a
            competitive market.
          </p>
        </div>
      </section>
    </div>
  );
}
