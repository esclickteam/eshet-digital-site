"use client";
import { useEffect, useRef, useState } from "react";
import "./LaptopBurst.css"; // אפשר להשאיר אותו לשימוש חוזר

export default function CampaignBurst() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [stageSize, setStageSize] = useState(700);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // גודל stage לפי רוחב המסך
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStageSize(400);
      } else {
        setStageSize(700);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // חישוב radius פרופורציונלי תמיד (אחוז קבוע מה-stage)
  useEffect(() => {
    setRadius(stageSize * 0.40);
  }, [stageSize]);

  const items = [
    { label: "WordPress", src: "/icons/wordpress.jpeg" },
    { label: "Wix", src: "/icons/wix.png" },
    { label: "Shopify", src: "/icons/shopify.jpeg" },
    { label: "PayPal", src: "/icons/paypal.jpeg" },
    { label: "React", src: "/icons/react.png" },
    { label: "Next.js", src: "/icons/nextdotjs.jpeg" },
    { label: "Node.js", src: "/icons/node.png" },
    { label: "Vercel", src: "/icons/vercel.jpeg" },
    { label: "Meta", src: "/icons/meta.png" },
    { label: "JavaScript", src: "/icons/javascript.jpeg" },
  ];

  return (
    <div className="lb-section" ref={ref}>
      <div
        className={`lb-stage ${show ? "show" : ""}`}
        style={{ width: stageSize, height: stageSize }}
      >
        {/* כאן האייקון המרכזי החדש */}
        <img
          className="lb-laptop"
          src="/icons/graph.png" 
          alt="Digital Campaign"
        />

        <ul className="lb-icons">
          {items.map((it, i) => {
            const angle = (i / items.length) * (2 * Math.PI) - Math.PI / 2;
            const x = 50 + (radius / stageSize) * 100 * Math.cos(angle);
            const y = 50 + (radius / stageSize) * 100 * Math.sin(angle);

            return (
              <li
                key={it.label}
                className="lb-icon"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                <img src={it.src} alt={it.label} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
