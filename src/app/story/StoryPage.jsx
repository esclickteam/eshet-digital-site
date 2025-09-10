"use client";
import React from "react";
import "./story.css";

export default function StoryPage() {
  return (
    <div className="story-page">
      {/* Hero */}
      <section className="story-hero">
        <h1 className="story-title gradient-text">Our Story</h1>
        <p className="story-subtitle">
          <strong>Eshet Digital</strong> was founded by two entrepreneurs from
          completely different industries – permanent makeup and civil
          engineering. As small business owners, we experienced the same
          challenges our clients face every day: standing out in a crowded
          market, attracting the right audience, and growing beyond the basics.
        </p>
      </section>

      {/* Sections */}
      <section className="story-section alt-bg">
        <h2>The Turning Point</h2>
        <p>
          Like many businesses starting out, we tried working with marketers and
          launched simple websites. But deep down, we always wanted more. We
          wanted tools that not only looked good but truly helped us grow. That
          desire pushed us to dive deeper — learning technology, branding,
          design, and strategy from the inside out.
        </p>
      </section>

      <section className="story-section">
        <h2>Walking in Our Clients’ Shoes</h2>
        <p>
          Because we’ve been in our clients’ position, we know exactly what it
          feels like to struggle with visibility, budgets, and growth. There’s
          no better way to connect with business owners than to share the same
          journey — and that’s what makes our approach unique.
        </p>
      </section>

      <section className="story-section alt-bg">
        <h2>Why We Built Eshet Digital</h2>
        <p>
          Our vision was clear: create professional websites tailored to real
          goals, branding that inspires trust and authority, and smart digital
          tools that actually drive growth.
        </p>
      </section>

      <section className="story-section">
        <h2>Looking Ahead</h2>
        <p>
          Today, our mission is simple: help businesses become the best version
          of themselves online. We combine personal experience with professional
          expertise to deliver results that matter.
        </p>
      </section>
    </div>
  );
}
