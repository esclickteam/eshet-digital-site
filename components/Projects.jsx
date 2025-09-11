"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
import "./Projects.css";
import FAQ from "./faq";

export default function Projects({ categoryFromUrl = null }) {
  const router = useRouter();

  // כל הקטגוריות
  const projects = {
    "Website Design": [
      {
        image: "/images/1.jpg",
        category: "Business",
        title: "Business Website",
        desc: "SEO-optimized website for a local business — boosting leads by 120%.",
        tags: ["Web"],
      },
      {
        image: "/images/video.png",
        category: "Corporate",
        title: "Corporate Landing Page",
        desc: "Clean design with conversion-focused CTA — increased signups by 80%.",
        tags: ["Web"],
      },
    ],
    "E-commerce": [
      {
        image: "/images/wix.png",
        category: "E-commerce",
        title: "Online Store",
        desc: "Shopify build with custom design, sales up by 200% in 3 months.",
        tags: ["Web", "Shopify"],
      },
      {
        image: "/images/wordpress.jpeg",
        category: "E-commerce",
        title: "Product Catalog Website",
        desc: "Modern catalog design with easy checkout — improved UX and retention.",
        tags: ["Web"],
      },
    ],
    "Branding & Logo Design": [
      {
        image: "/images/branding-identity.jpg",
        category: "Branding",
        title: "Luxury Beauty Studio",
        desc: "Minimalist logo + visual identity — strong brand recognition online.",
        tags: ["Design"],
      },
      {
        image: "/images/branding-logo.jpg",
        category: "Branding",
        title: "Tech Startup Branding",
        desc: "Logo, typography, and social media kit for a new SaaS brand.",
        tags: ["Logo", "Design"],
      },
      {
        image: "/images/branding-visuals.jpg",
        category: "Branding",
        title: "Brand Visuals",
        desc: "Social media kit and marketing visuals to strengthen online presence.",
        tags: ["Design"],
      },
    ],
    "Digital Marketing Campaigns": [
      {
        image: "/images/campaign-creatives.jpg",
        category: "Marketing",
        title: "Instagram Campaign",
        desc: "Reaching 50K+ users organically with engaging reels & carousels.",
        tags: ["Social", "Ads"],
      },
      {
        image: "/images/campaign-optimization.jpg",
        category: "Marketing",
        title: "Video Ads",
        desc: "CTR improved ×3 with creative video editing for Facebook ads.",
        tags: ["Ads"],
      },
      {
        image: "/images/campaign-results.jpg",
        category: "Marketing",
        title: "Results Dashboard",
        desc: "Analytics-focused campaign management showing real results.",
        tags: ["Analytics"],
      },
      {
        image: "/images/campaign-strategy.jpg",
        category: "Marketing",
        title: "Campaign Strategy",
        desc: "Strategic planning to maximize audience engagement.",
        tags: ["Strategy"],
      },
    ],
  };

  // ברירת מחדל מתוך ה־URL או הטאב הראשון
  const defaultTab =
    categoryFromUrl && projects[categoryFromUrl]
      ? categoryFromUrl
      : Object.keys(projects)[0];

  const [activeTab, setActiveTab] = useState(defaultTab);

  // שינוי טאב יעדכן גם את ה־URL
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`/projects?category=${encodeURIComponent(tab)}`, { scroll: false });
  };

  // אנימציית כניסה ל־cards ו־CTA
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
      .querySelectorAll(".project-card, .faq-section, .cta-wrapper")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dev-section">
      <div className="container">
        {/* Hero */}
        <h1 className="dev-title gradient-text">Our Projects</h1>
        <p className="dev-intro">
          Explore projects we’ve crafted — combining strategy, design, and
          technology to deliver impactful digital solutions.
        </p>

        {/* Tabs */}
        <div className="tabs">
          {Object.keys(projects).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="features-grid">
          {projects[activeTab].map((proj, i) => (
            <div key={i} className="project-card">
              <Image
                src={proj.image}
                alt={proj.title}
                width={600}
                height={400}
                className="project-image"
              />
              <div className="project-info">
                <span className="project-category">{proj.category}</span>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="tags">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Start Your Project
          </a>
        </div>

        {/* FAQ */}
        <FAQ
          faqs={[
            {
              question: "What kind of projects do you take on?",
              answer:
                "We handle websites, e-commerce, branding, and digital marketing campaigns.",
            },
            {
              question: "Can you customize projects to my needs?",
              answer:
                "Absolutely. Every project is fully tailored to your business goals.",
            },
            {
              question: "Do you also provide ongoing support?",
              answer:
                "Yes, we offer maintenance, optimization, and scaling to keep your project growing.",
            },
          ]}
        />
      </div>
    </section>
  );
}
