"use client";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* ✅ וידאו רקע */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ תוכן מעל הווידאו */}
      <div className="hero-content">
        <h1>Your Brand Built Smarter</h1>
        <p>
          Custom websites, strategic branding, and digital marketing — everything
          your business needs to stand out online.
        </p>
        <a href="/book" className="btn-primary">
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
}
