"use client";
import React from "react";
import "./mission.css";

export default function MissionPage() {
  return (
    <div className="service-page">
      {/* Hero / Intro */}
      <section className="hero">
        <h1>Our Mission</h1>
        <p>
          Your success is our success. At Eshet Digital, we don’t measure
          achievements only by the websites we build or the campaigns we
          launch—we measure them by the growth of your business. Every project
          we take on is a shared journey. When you thrive, we thrive.
        </p>
      </section>

      {/* Blocks */}
      <section className="blocks">
        <div className="block">
          <h2>🤝 A Partnership, Not a Transaction</h2>
          <p>
            We believe digital success comes from collaboration. That’s why we
            don’t see our clients as “customers,” but as long-term partners.
            Together, we define your goals, sharpen your vision, and turn it
            into actionable strategies that deliver measurable results.
          </p>
        </div>

        <div className="block">
          <h2>📊 Driving Impact That Matters</h2>
          <p>
            A beautiful website or clever campaign is meaningless if it doesn’t
            move the needle for your business. Our mission is to deliver work
            that creates impact: more leads, stronger engagement, higher sales,
            and lasting customer trust.
          </p>
        </div>

        <div className="block">
          <h2>💡 Innovation with Purpose</h2>
          <p>
            We combine creativity with technology to craft solutions that stand
            out. From custom website design to advanced marketing strategies,
            every decision we make is guided by one principle: innovation should
            serve your business goals, not just look good.
          </p>
        </div>

        <div className="block">
          <h2>🔎 Built on Trust and Transparency</h2>
          <p>
            We know that the digital world can feel overwhelming. That’s why we
            put honesty and transparency at the core of our process. We explain,
            we guide, and we share insights—so you always know where your project
            stands and where it’s going.
          </p>
        </div>

        <div className="block">
          <h2>🚀 Growing Together</h2>
          <p>
            Our mission is not about short-term wins—it’s about building a
            foundation for growth. We aim to be there with you as your business
            evolves, helping you adapt, scale, and stay ahead of the competition.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="closing">
        <p>
          At the heart of Eshet Digital’s mission is a simple truth: when you
          succeed, we succeed. That belief fuels everything we do, every
          strategy we build, and every client relationship we cherish.
        </p>
      </section>
    </div>
  );
}
