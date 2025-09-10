"use client";
import "./ContentBurst.css";

export default function ContentBurst() {
  return (
    <section className="cb-section">
      <div className="cb-stage">
        {/* ===== Editing Screen Center ===== */}
        <div className="cb-screen">
          <img src="/images/content-edit.png" alt="Content Editing" />
        </div>

        {/* ===== Icons Around ===== */}
        <ul className="cb-icons">
          <li className="cb-icon orbit-1">
            <img src="/icons/writing.png" alt="Writing" />
          </li>
          <li className="cb-icon orbit-2">
            <img src="/icons/edit.png" alt="Editing" />
          </li>
          <li className="cb-icon orbit-3">
            <img src="/icons/video.png" alt="Video Editing" />
          </li>
          <li className="cb-icon orbit-4">
            <img src="/icons/camera.png" alt="Camera" />
          </li>
          <li className="cb-icon orbit-5">
            <img src="/icons/microphone.png" alt="Microphone" />
          </li>
          <li className="cb-icon orbit-6">
            <img src="/icons/design.png" alt="Creative Design" />
          </li>
        </ul>
      </div>
    </section>
  );
}
