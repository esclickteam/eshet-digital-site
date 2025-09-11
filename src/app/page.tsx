"use client";

import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Services from "./Services";
import ValuesSection from "./ValuesSection";
import StatsSection from "../../components/StatsSection"; 
import GetStartedForm from "../../components/GetStartedForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Services />
        <ValuesSection />
        <StatsSection />   
        <GetStartedForm />
        {/* Footer יורד מכאן כי הוא כבר קיים ב-layout */}
      </main>
    </>
  );
}
