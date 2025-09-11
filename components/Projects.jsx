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
        title: "Personal Training Website",
        desc: "A modern business website for a personal trainer, featuring services, class scheduling, and nutrition coaching. SEO-optimized — boosted client inquiries by 120%.",
        tags: ["Web"],
      },
      {
        image: "/images/2.jpg",
        category: "Corporate",
        title: "Corporate Fitness SaaS Platform",
        desc: "A full-featured SaaS platform for fitness studios — including AI workout generator, integrated billing, video sessions, and multi-trainer scheduling. Clean UX increased signups by 80%.",
        tags: ["Web"],
      },
{
        image: "/images/3.jpg",
        category: "Business",
        title: "Construction Business Website",
        desc: "A professional corporate website for a construction company, showcasing services, past projects, and contact options. SEO-focused design drove strong local visibility.",
        tags: ["Web"],
      },
      {
        image: "/images/4.jpg",
        category: "Business / Web",
        title: "Real Estate Business Website",
        desc: "A professional website for a real estate agency, featuring property listings, agent profiles, and client testimonials. Designed to generate leads and increase trust with potential buyers.",
        tags: ["Web"],
      },
{
        image: "/images/5.jpg",
        category: "Lifestyle / Web",
        title: "Barber Shop Website",
        desc: "A stylish and modern website for a men’s grooming salon, highlighting services like haircuts, beard grooming, and razor shaves. Includes gallery, testimonials, and easy online booking.",
        tags: ["Web"],
      },
      {
        image: "/images/6.jpg",
        category: "Fashion / Web",
        title: "Bridal Studio Website",
        desc: "An elegant website for a bridal studio, showcasing collections of wedding gowns, appointment booking, and brand story. Minimalist design focused on elegance and sophistication.",
        tags: ["Web"],
      },
      {
        image: "/images/7.jpg",
        category: "Lifestyle / Web",
        title: "Barber Shop Website",
        desc: "A bold and premium barber shop website featuring precision haircuts, luxury beard care, and royal shaves. Dark elegant design with before/after gallery and easy online booking.",
        tags: ["Web"],
      },
      {
        image: "/images/8.jpg",
        category: "Fashion & Beauty / Web",
        title: "Hair Studio Website",
        desc: "A stylish hair salon website showcasing personalized treatments, color highlights, luxury care, and bridal hair services. Includes appointment booking and a modern, feminine design.",
        tags: ["Web"],
      },
      {
        image: "/images/9.jpg",
        category: "Personal Brand / Web",
        title: "Personal Stylist Website",
        desc: "A personal brand website for a professional hair stylist, highlighting services like coloring, styling, and special occasion looks. Features appointment booking and client-focused design.",
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

  // ברירת מחדל
  const defaultTab = Object.keys(projects)[0];

  // state ריק בתחילה כדי להימנע מבעיות hydration
  const [activeTab, setActiveTab] = useState("");

  // נקבע טאב אחרי טעינה
  useEffect(() => {
    const initialTab =
      (categoryFromUrl && projects[categoryFromUrl] && categoryFromUrl) ||
      defaultTab;
    setActiveTab(initialTab);
  }, [categoryFromUrl]);

  // שינוי טאב יעדכן גם URL
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`/projects?category=${encodeURIComponent(tab)}`, {
      scroll: false,
    });
  };

  // אנימציות כניסה
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

  if (!activeTab) return null; // לא נרנדר עד שה־tab נקבע

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
        <div className="category-block">
          <h2 className="category-title">{activeTab}</h2>
          <div className="features-grid">
            {projects[activeTab].map((proj, i) => (
              <div key={i} className="project-card full-card">
                {/* תמונה בראש */}
                <div className="project-image">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={600}
                    height={400}
                    className="cover-image"
                  />
                </div>

                {/* טקסט מתחת לתמונה */}
                <div className="project-details">
                  <h2 className="cover-title">{proj.title}</h2>
                  <p className="cover-desc">{proj.desc}</p>
                  <a href="/get-started" className="cover-button">
                    Get Started
                  </a>
                </div>

                {/* מידע נוסף */}
                <div className="project-info">
                  <span className="project-category">{proj.category}</span>
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
