"use client";
import React, { useEffect } from "react";
import "./team.css";

export default function TeamPage() {
  useEffect(() => {
    const blocks = document.querySelectorAll(".team-block");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, i * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="team-page">
      {/* Hero / Intro */}
      <section className="team-hero">
        <div className="container">
          <h1 className="team-title gradient-text">Meet Our Team</h1>
          <p className="team-intro">
            At <strong>Eshet Digital</strong>, our team is the driving force
            behind every successful project. We combine <span>creativity</span>,
            <span>technology</span>, and <span>strategy</span> to deliver
            exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Blocks */}
      <section className="team-blocks container">
        <div className="team-block">
          <h2>👥 Who We Are</h2>
          <p>
            We are digital creators, designers, and strategists. Each member
            brings unique expertise—graphic design, development, technology,
            marketing, and content creation. Together we build experiences that
            blend <strong>creativity & technology</strong>.
          </p>
        </div>

        <div className="team-block">
          <h2>⚙️ How We Work</h2>
          <p>
            We listen to your needs, analyze your audience, craft a strategy,
            and guide the process from <em>idea</em> to <em>launch</em>. Every
            stage is managed with <strong>transparency</strong> and
            <strong>quality</strong>.
          </p>
        </div>

        <div className="team-block">
          <h2>💡 Our Core Values</h2>
          <ul>
            <li>🎨 Creativity – Unique design & user experiences</li>
            <li>💻 Professionalism – Uncompromising quality</li>
            <li>📊 Results – Platforms that drive growth</li>
            <li>🤝 Transparency – Open, honest collaboration</li>
          </ul>
        </div>

        <div className="team-block">
          <h2>🌍 Why Choose Us</h2>
          <ul>
            <li>Modern design + cutting-edge technology</li>
            <li>Tailored solutions for any business size</li>
            <li>We treat your project like our own</li>
            <li>Experts in WordPress, Shopify, Wix, React, Next.js & more</li>
          </ul>
        </div>

        <div className="team-block">
          <h2>🚀 What This Means for You</h2>
          <p>
            Partnering with us means more than a service provider—you gain a{" "}
            <strong>dedicated team</strong> that helps your business grow,
            transforms ideas into reality, and gives your brand the edge to
            stand out.
          </p>
        </div>
      </section>
    </div>
  );
}
