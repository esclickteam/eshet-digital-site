import React from "react";
import "./digital-campaigns.css";

export default function DigitalCampaignsPage() {
  return (
    <div className="service-page">
      {/* Hero */}
      <section className="hero">
        <h1>Digital Campaign Management that Delivers Results</h1>
        <p>
          We run smart campaigns on Facebook, Instagram, Google, and beyond — using
          data-driven strategies, creative content, and continuous optimization.
          Our goal: generate more leads, more sales, and real business growth.
        </p>
      </section>

      {/* Blocks */}
      <section className="blocks">
        <div className="block">
          <h2>📊 Data-Driven Strategy</h2>
          <p>
            We don’t guess — we analyze. Every campaign is built on audience
            research, competitor insights, and strategic planning.
          </p>
          <ul>
            <li>✔ Target audience identification</li>
            <li>✔ Precise segmentation</li>
            <li>✔ Continuous tracking & insights</li>
          </ul>
        </div>

        <div className="block">
          <h2>🎨 Creatives that Convert</h2>
          <p>
            Great ads aren’t just pretty — they convert. We craft unique creatives
            that combine compelling copy, visuals, and strong calls-to-action.
          </p>
        </div>

        <div className="block">
          <h2>⚡ Continuous Optimization</h2>
          <p>
            A well-managed campaign never stands still. We perform daily
            optimizations to ensure you get the maximum ROI from your budget.
          </p>
        </div>

        <div className="block">
          <h2>📈 Results that Speak for Themselves</h2>
          <p>
            At the end of the day — results matter. We track performance, provide
            clear transparent reports, and ensure every dollar works for you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How long does it take to see results?</h3>
          <p>
            Results vary by industry and budget. You’ll often see initial results within
            the first month, with significant improvements after ongoing optimization.
          </p>
        </div>
        <div className="faq-item">
          <h3>What’s the minimum budget to start?</h3>
          <p>
            We recommend starting with a budget of $1,000–$1,500 per month to allow
            proper testing and optimization.
          </p>
        </div>
        <div className="faq-item">
          <h3>Where should I advertise — Facebook, Instagram, or Google?</h3>
          <p>
            It depends on your product and audience. We analyze where your customers are
            and allocate budget accordingly.
          </p>
        </div>
        <div className="faq-item">
          <h3>How long should a campaign run before knowing if it’s successful?</h3>
          <p>
            Digital campaigns can’t be measured in just a few days. Typically, at least
            4–6 weeks of activity, testing, and optimization are needed to draw reliable
            conclusions.
          </p>
        </div>
        <div className="faq-item">
          <h3>Why hire an agency instead of managing campaigns alone?</h3>
          <p>
            Managing campaigns alone often leads to wasted spend on trial-and-error.
            An agency brings expertise, experience, and advanced tools to maximize ROI.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do we know the campaign is successful?</h3>
          <p>
            We provide detailed, transparent reports — including clicks, leads,
            cost-per-acquisition, and real ROI tracking.
          </p>
        </div>
      </section>
    </div>
  );
}
