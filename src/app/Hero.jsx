"use client";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
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
