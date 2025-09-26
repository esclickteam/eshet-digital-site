"use client";

import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Services from "./Services";
import ValuesSection from "./ValuesSection";
import StatsSection from "../../components/StatsSection"; 
import DevelopmentProcessSection from "../../components/DevelopmentProcessSection"; 
import GetStartedForm from "../../components/GetStartedForm";
import FAQ from "../../components/FAQ"; // ✅ הוספתי את ה-FAQ

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Services />

        {/* ✅ Development Process מיד אחרי Services */}
        <DevelopmentProcessSection />

        <ValuesSection />
        <StatsSection />

        {/* ✅ FAQ לפני הטופס */}
        <FAQ />

        <GetStartedForm />
        {/* Footer יורד מכאן כי הוא כבר קיים ב-layout */}
      </main>
    </>
  );
}
