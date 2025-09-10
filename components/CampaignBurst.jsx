"use client";
import { useEffect, useRef, useState } from "react";
import "./CampaignBurst.css"; 

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
    { label: "WordPress", src: "/icons/Google Ads.jpeg" },
    { label: "Wix", src: "/icons/Instagram.png" },
    { label: "Shopify", src: "/icons/LinkedInn.png" },
    { label: "PayPal", src: "/icons/TikTok.png" },
    { label: "React", src: "/icons/youtube.png" },
    { label: "Meta", src: "/icons/meta.png" },
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
