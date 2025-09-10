"use client";
import "./DesignBurst.css";

export default function DesignBurst() {
  return (
    <section className="db-section">
      <div className="db-stage">
        {/* ===== Laptop Center ===== */}
        <div className="db-laptop">
          <img src="/images/dev-techh.png" alt="Design Laptop" />
        </div>

        {/* ===== Icons Around ===== */}
        <ul className="db-icons">
          <li className="db-icon orbit-1">
            <img src="/icons/illustrator.png" alt="Illustrator" />
          </li>
          <li className="db-icon orbit-2">
            <img src="/icons/photoshop.png" alt="Photoshop" />
          </li>
          <li className="db-icon orbit-3">
            <img src="/icons/idVC.png" alt="Figma" />
          </li>
          <li className="db-icon orbit-4">
            <img src="/icons/canva.png" alt="Canva" />
          </li>
          <li className="db-icon orbit-5">
            <img src="/icons/pantone.png" alt="Pantone" />
          </li>
          <li className="db-icon orbit-6">
            <img src="/icons/indesign.png" alt="InDesign" />
          </li>
        </ul>
      </div>
    </section>
  );
}
