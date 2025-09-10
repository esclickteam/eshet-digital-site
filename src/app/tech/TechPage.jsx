import React, { useEffect } from "react";
import "./tech.css";

export default function TechPage() {
  useEffect(() => {
    const blocks = document.querySelectorAll(".tech-block");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
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
    <div className="service-page">
      {/* Hero Section */}
      <section className="hero tech-block">
        <h1 className="animated-title">Technology That Powers Success</h1>
        <p>
          Behind every successful brand lies advanced technology. We use the
          latest tools and platforms to ensure your business is always one step
          ahead.
        </p>
      </section>

      {/* Blocks */}
      <section className="blocks">
        {/* Block 1 – Tech Stack */}
        <div className="block tech-block">
          <h2>⚙️ Our Tech Stack</h2>
          <p>
            Every business is unique — and so are its technical needs. We
            combine the world’s leading platforms with modern frameworks to
            build websites that are beautiful, powerful, and future-proof.
          </p>
          <ul className="icon-list">
            <li>
              <img src="/icons/wordpress.jpeg" alt="WordPress" /> WordPress –
              flexible & SEO-friendly
            </li>
            <li>
              <img src="/icons/wix.png" alt="Wix" /> Wix – fast, simple,
              effective
            </li>
            <li>
              <img src="/icons/shopify.jpeg" alt="Shopify" /> Shopify – built
              for e-commerce growth
            </li>
            <li>
              <img src="/icons/javascript.jpeg" alt="JavaScript" /> JavaScript –
              the core programming language of the web
            </li>
            <li>
              <img src="/icons/react.png" alt="React" /> React,{" "}
              <img src="/icons/nextdotjs.jpeg" alt="Next.js" /> Next.js,{" "}
              <img src="/icons/node.png" alt="Node.js" /> Node.js – high-performance
              custom solutions
            </li>
          </ul>
        </div>

        {/* Block 2 – Automation & AI */}
        <div className="block tech-block">
          <h2>🤖 Automation & AI</h2>
          <p>
            We implement automation and AI to streamline processes, save time,
            and improve customer experiences.
          </p>
          <ul>
            <li>✔ Smart chatbots for instant replies</li>
            <li>✔ Automated booking & CRM systems</li>
            <li>✔ AI-driven marketing content</li>
            <li>✔ Email & funnel automation</li>
          </ul>
        </div>

        {/* Block 3 – Hosting & Security */}
        <div className="block tech-block">
          <h2>🔒 Hosting & Security</h2>
          <p>We ensure your website stays online, secure, and lightning-fast.</p>
          <ul>
            <li>✔ High-speed hosting (Vercel, AWS, Cloudflare)</li>
            <li>✔ SSL certificates for maximum trust</li>
            <li>✔ Daily backups & monitoring</li>
            <li>✔ Advanced protection against cyber threats</li>
          </ul>
        </div>

        {/* Block 4 – Analytics & Data */}
        <div className="block tech-block">
          <h2>📊 Analytics & Data</h2>
          <p>
            We don’t guess — we measure. Every site and campaign comes with
            clear analytics for continuous improvement.
          </p>
          <ul>
            <li>✔ Google Analytics & Search Console</li>
            <li>✔ Heatmaps & behavior tracking</li>
            <li>✔ Conversion optimization tools</li>
            <li>✔ Real-time reporting dashboards</li>
          </ul>
        </div>

        {/* Block 5 – Custom Development */}
        <div className="block tech-block">
          <h2>🛠 Custom Development</h2>
          <p>
            Some businesses need more than standard tools — and that’s where our
            custom development comes in.
          </p>
          <ul>
            <li>✔ Unique web applications</li>
            <li>✔ Custom integrations (payments, CRM, APIs)</li>
            <li>✔ Business dashboards</li>
            <li>✔ Scalable systems built  for growth</li>
          </ul>
        </div>
      </section>

      {/* Outro */}
      <section className="outro tech-block">
        <p>
          For us, technology is not the goal — it’s the foundation. Success is
          not measured only by design or marketing, but by the integration of
          reliable, innovative, and secure technology with the right strategy.
        </p>
      </section>
    </div>
  );
}
