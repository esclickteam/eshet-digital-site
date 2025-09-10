"use client";
import "./Services.css";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaPalette,
  FaBullhorn,
  FaFileAlt,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Website Development & Design",
    desc: "Business websites, online stores, and landing pages — fast, responsive, and SEO-optimized.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Campaign Management",
    desc: "Paid advertising on Facebook, Instagram, Google, and more — with strategies that deliver results.",
  },
  {
    icon: <FaPalette />,
    title: "Graphic Design & Branding",
    desc: "Professional logos, brand identity, and marketing assets that strengthen your business image.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Social Media Design & Content",
    desc: "Custom posts, stories, and banners with engaging content that connects with your audience.",
  },
  {
    icon: <FaFileAlt />,
    title: "Content Writing & Video Editing",
    desc: "SEO articles, marketing content, video scripts, and full editing tailored to your brand.",
  },
  {
    icon: <FaLightbulb />,
    title: "Digital Strategy & Maintenance",
    desc: "Custom marketing plans, professional consulting, and ongoing website updates and security.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-head">
        <h2>Our Services</h2>
        <p>
          Comprehensive digital solutions that combine design, technology, and
          marketing to help your business grow.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href="#contact" className="learn-more">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
