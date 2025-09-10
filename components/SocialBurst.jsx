"use client";
import "./SocialBurst.css";

export default function SocialBurst() {
  const items = [
    { label: "Google Ads", src: "/icons/Google Ads.jpeg" },
    { label: "Instagram", src: "/icons/Instagram.png" },
    { label: "LinkedIn", src: "/icons/LinkedInn.png" },
    { label: "TikTok", src: "/icons/TikTok.png" },
    { label: "YouTube", src: "/icons/youtube.png" },
    { label: "Meta", src: "/icons/meta.png" },
  ];

  return (
    <section className="sb-section">
      <div className="sb-stage">
        {/* ===== Phone Center ===== */}
        <div className="sb-phone">
          <img src="/images/SocialMediaPage.png" alt="Social Phone" />
        </div>

        {/* ===== Social Icons Around ===== */}
        <ul className="sb-icons">
          {items.map((item, index) => (
            <li key={index} className={`sb-icon orbit-${index + 1}`}>
              <img src={item.src} alt={item.label} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
