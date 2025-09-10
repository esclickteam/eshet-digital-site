"use client";
import "./StrategyBurst.css";

export default function StrategyBurst() {
  return (
    <section className="sb-section">
      <div className="sb-stage">
        {/* ===== Server / Laptop Center ===== */}
        <div className="sb-core">
          <img src="/images/strategy-core.png" alt="Digital Strategy Core" />
        </div>

        {/* ===== Icons Row ===== */}
        <ul className="sb-icons">
          <li className="sb-icon"><img src="/icons/security.png" alt="Security" /></li>
          <li className="sb-icon"><img src="/icons/optimization.png" alt="Optimization" /></li>
          <li className="sb-icon"><img src="/icons/analytics.png" alt="Analytics" /></li>
          <li className="sb-icon"><img src="/icons/update.png" alt="Updates" /></li>
          <li className="sb-icon"><img src="/icons/cloud.png" alt="Cloud" /></li>
          <li className="sb-icon"><img src="/icons/maintenance.png" alt="Maintenance" /></li>
        </ul>
      </div>
    </section>
  );
}
