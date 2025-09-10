"use client";

import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Services from "./Services";
import ValuesSection from "./ValuesSection";
import Projects from "../../components/Projects";
import StatsSection from "../../components/StatsSection"; 
import GetStartedForm from "../../components/GetStartedForm";
import DevelopmentProcessSection from "../../components/DevelopmentProcessSection"; // 👈 חדש

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Services />

        {/* 👇 כאן נכנס תהליך הפיתוח באמצע, אחרי השירותים */}
        <DevelopmentProcessSection />

        <ValuesSection />
        <StatsSection />   
        <Projects />
        <GetStartedForm />
        {/* Footer יורד מכאן כי הוא כבר קיים ב-layout */}
      </main>
    </>
  );
}
