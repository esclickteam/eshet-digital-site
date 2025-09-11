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
         image: "/images/E-commerce/1.jpg",
    category: "E-commerce / Beauty",
    title: "Skincare & Beauty E-commerce Website",
    desc: "An elegant online store for a premium beauty brand, showcasing skincare essentials, cosmetics, and best-sellers. Designed with clean product layouts, fast checkout, and modern UI for high conversions.",
    tags: ["Web", "Shopify", "E-commerce"],
      },
       {
         image: "/images/E-commerce/2.jpg",
    category: "E-commerce / Fashion",
    title: "Fashion E-commerce Website",
    desc: "A stylish e-commerce website for a fashion boutique, highlighting evening gowns, cocktail dresses, and bridal wear. Features product showcase, seamless add-to-cart experience, and global shipping options.",
    tags: ["Web", "Shopify", "E-commerce"],
      },
 {
         image: "/images/E-commerce/3.jpg",
    category: "E-commerce / Babywear",
    title: "Babywear E-commerce Website",
    desc: "A soft and welcoming e-commerce platform for baby apparel, focusing on organic fabrics, safe designs, and family-friendly shopping. Includes best-seller highlights, customer trust badges, and easy checkout.",
    tags: ["Web", "Shopify", "E-commerce"],
      },
       {
         image: "/images/E-commerce/4.jpg",
    category: "E-commerce / Health",
    title: "Supplements E-commerce Website",
    desc: "A modern e-commerce website for a health and wellness brand, featuring premium supplements, vitamins, and proteins. Clean product display with fast checkout and trust-focused design.",
    tags: ["Web", "E-commerce", "Wellness"],
      },
       {
         image: "/images/E-commerce/5.jpg",
    category: "E-commerce / Food & Beverage",
    title: "Bakery E-commerce Website",
    desc: "A warm and inviting online store for a bakery, showcasing cakes, cookies, and desserts with a user-friendly ordering system. Designed for mouth-watering visuals and seamless checkout.",
    tags: ["Web", "E-commerce", "Bakery"],
      },
       {
         image: "/images/E-commerce/6.jpg",
    category: "E-commerce / Lifestyle",
    title: "Gift Shop E-commerce Website",
    desc: "A premium e-commerce platform for luxury gift boxes, offering curated sets for every occasion. Elegant packaging, global shipping, and a customer-first shopping experience.",
    tags: ["Web", "E-commerce", "Gifts"],
      },
       {
         image: "/images/E-commerce/7.jpg",
    category: "E-commerce / Lifestyle",
    title: "Flower Shop E-commerce Website",
    desc: "A vibrant online store for a flower shop, offering seasonal bouquets, luxury wedding arrangements, and same-day delivery. Designed with elegant product displays and a seamless checkout flow.",
    tags: ["Web", "E-commerce", "Flowers"],
      },
       {
         image: "/images/E-commerce/8.jpg",
    category: "E-commerce / Events",
    title: "Balloon Decor E-commerce Website",
    desc: "A colorful and fun online platform for balloon designs, featuring custom arrangements for weddings, birthdays, and corporate events. Includes product highlights, easy ordering, and festive branding.",
    tags: ["Web", "E-commerce", "Decor"],
      },
      {
         image: "/images/E-commerce/9.jpg",
    category: "E-commerce / Technology",
    title: "Electronics E-commerce Website",
    desc: "A modern and sleek online store for electronics and gadgets, showcasing smartphones, laptops, headphones, and accessories. Optimized for conversions with trust badges and fast checkout.",
    tags: ["Web", "E-commerce", "Tech"],
      },

    ],

    
    "Branding & Logo Design": [
  
      {
  image: "/images/branding-logo-design/1.jpg",
  category: "Branding & Logo Design",
  title: "Prime Realty Logo",
  desc: "Minimalist real estate logo designed to communicate trust, stability, and modern living.",
  tags: ["Branding", "Logo", "Real Estate"],
},

{
  image: "/images/branding-logo-design/2.jpg",
  category: "Branding & Logo Design",
  title: "PlayForge Logo",
  desc: "Vibrant gaming logo using gradient colors to represent creativity, fun, and digital innovation.",
  tags: ["Branding", "Logo", "Gaming"],
},

{
  image: "/images/branding-logo-design/3.jpg",
  category: "Branding & Logo Design",
  title: "Solid Build Logo",
  desc: "Strong and bold construction logo symbolizing reliability, strength, and future growth.",
  tags: ["Branding", "Logo", "Construction"],
},

{
  image: "/images/branding-logo-design/4.jpg",
  category: "Branding & Logo Design",
  title: "Luxe Nails Logo",
  desc: "A refined and elegant logo for a nail studio, featuring a minimalist hand illustration paired with serif typography. Designed to evoke beauty, luxury, and sophistication.",
  tags: ["Branding", "Logo", "Beauty"],
},

{
  image: "/images/branding-logo-design/5.jpg",
  category: "Branding & Logo Design",
  title: "Aureon Logo",
  desc: "A futuristic tech logo with a sleek gradient icon symbolizing innovation and connectivity. The bold typography conveys strength and trust in the digital space.",
  tags: ["Branding", "Logo", "Technology"],
},

{
  image: "/images/branding-logo-design/6.jpg",
  category: "Branding & Logo Design",
  title: "Morris & Johnson Logo",
  desc: "A prestigious logo for a law firm, combining a monogram shield with the scales of justice. Crafted to represent authority, trust, and professional integrity.",
  tags: ["Branding", "Logo", "Law Firm"],
},

{
  image: "/images/branding-logo-design/7.jpg",
  category: "Branding & Logo Design",
  title: "Goldman Logo",
  desc: "A professional and modern logo for a structural engineering firm, featuring a geometric building icon in gold paired with bold typography. Designed to represent stability, precision, and reliability in construction.",
  tags: ["Branding", "Logo", "Engineering"],
},

{
  image: "/images/branding-logo-design/8.jpg",
  category: "Branding & Logo Design",
  title: "Crystalix Cleaning Logo",
  desc: "A fresh and modern logo for a cleaning services brand, featuring a crystal water drop combined with clean flowing lines. The vibrant gradient colors and sparkles symbolize purity, freshness, and trust.",
  tags: ["Branding", "Logo", "Cleaning"],
},

{
  image: "/images/branding-logo-design/9.jpg",
  category: "Branding & Logo Design",
  title: "Aurora Travels Logo",
  desc: "A vibrant travel logo combining an airplane, mountains, and waves within a circular emblem. Gradient tones convey adventure, exploration, and unforgettable journeys.",
  tags: ["Branding", "Logo", "Travel"],
},

        

    ],

    "Digital Marketing Campaigns": [
      
      {
  image: "/images/Digital Marketing Campaigns/1.jpg",
  title: "Social Media Ad Campaign – Photography",
  desc: "A high-converting ad campaign for a photography business, focusing on visual storytelling and audience engagement. Achieved strong ROI with compelling ad creatives.",
  tags: ["Marketing", "Photography", "Ads"],
},
   {
  image: "/images/Digital Marketing Campaigns/2.jpg",
  title: "Lead Generation Campaign – Fitness Industry",
  desc: "Targeted digital campaign designed for personal trainers, using fitness-focused creatives and call-to-actions. Increased lead volume and reduced cost per acquisition.",
  tags: ["Marketing", "Fitness", "Campaign"],
},
   {
  image: "/images/Digital Marketing Campaigns/3.jpg",
  title: "Event Marketing Campaign – Luxury Events",
  desc: "A lead-focused campaign for a luxury event agency, using premium visuals and persuasive ad copy. Delivered high-quality leads with exceptional ROI.",
  tags: ["Marketing", "Events", "Lead Generation"],
},
   {
  image: "/images/Digital Marketing Campaigns/4.jpg",
  title: "Kids Workshop Campaign",
  desc: "A lead generation campaign promoting weekly makeup classes for kids. Optimized ad creatives and targeted audience segments delivered high engagement and consistent leads.",
  tags: ["Marketing", "Education", "Workshops"],
},
   {
  image: "/images/Digital Marketing Campaigns/5.jpg",
  title: "Bridal & Event Campaign",
  desc: "A tailored campaign for a bridal makeup artist, focusing on premium visuals and seasonal demand. Increased bookings and brand awareness through social media ads.",
  tags: ["Marketing", "Beauty", "Events"],
},
   {
  image: "/images/Digital Marketing Campaigns/6.jpg",
  title: "Beauty Clinic Campaign",
  desc: "A digital campaign for a skin treatment clinic, highlighting premium skincare services. Achieved strong ROI with compelling ad copy and precision targeting.",
  tags: ["Marketing", "Healthcare", "Beauty"],
},
   {
  image: "/images/Digital Marketing Campaigns/7.jpg",
  title: "Nails Studio Campaign",
  desc: "A beauty campaign for a nail salon, promoting manicure and pedicure services with elegant visuals and targeted ads. Achieved consistent leads and increased client bookings.",
  tags: ["Marketing", "Beauty", "Campaign"],
},
   {
  image: "/images/Digital Marketing Campaigns/8.jpg",
  title: "DJ Wedding & Party Campaign",
  desc: "A high-energy campaign designed for DJs specializing in weddings and parties. Used engaging video ads and event-focused targeting to maximize bookings and audience reach.",
  tags: ["Marketing", "Events", "Music"],
},
   {
  image: "/images/Digital Marketing Campaigns/9.jpg",
  title: "Real Estate Lead Gen Campaign",
  desc: "A targeted lead generation campaign for a real estate business. Designed with precise audience targeting and persuasive ad creatives, generating high-quality property leads with a strong ROI.",
  tags: ["Marketing", "Real Estate", "Lead Generation"],
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
