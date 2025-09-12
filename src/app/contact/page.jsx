"use client";

import React from "react";
import ContactUs from "./ContactUs";   // 👈 כי הקובץ ContactUs.jsx נמצא באותה תיקייה
import "./ContactUs.css";             // 👈 טעינת ה-CSS

export default function ContactPage() {
  return (
    <main>
      <ContactUs />
    </main>
  );
}
