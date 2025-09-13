"use client";
import Head from "next/head"; // בשביל SEO תגי meta
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <>
      {/* SEO Tags */}
      <Head>
        <title>About Us – Eshet Digital</title>
        <meta
          name="description"
          content="Learn more about Eshet Digital – where design, technology, and marketing come together to create powerful digital solutions."
        />
        <meta
          name="keywords"
          content="Eshet Digital, About Us, Digital Agency, Web Design, Branding, Marketing"
        />
        <meta property="og:title" content="About Us – Eshet Digital" />
        <meta
          property="og:description"
          content="Eshet Digital – where design, technology, and marketing come together."
        />
        <meta property="og:url" content="https://www.eshetdigital.com/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.eshetdigital.com/og-about.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us – Eshet Digital" />
        <meta
          name="twitter:description"
          content="Eshet Digital – design, technology & marketing in one place."
        />
        <meta
          name="twitter:image"
          content="https://www.eshetdigital.com/og-about.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Eshet Digital",
              url: "https://www.eshetdigital.com",
              logo: "https://www.eshetdigital.com/logo.png",
              sameAs: [
                "https://www.facebook.com/eshetdigital",
                "https://www.instagram.com/eshetdigital",
                "https://www.linkedin.com/company/eshetdigital"
              ],
              description:
                "Eshet Digital – design, technology & marketing all in one agency.",
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <section className="about-section">
        <div className="about-container">
          <h1>About Eshet Digital</h1>
          <h2>Looking for a digital presence that delivers results?</h2>
          <p className="subtitle">
            Eshet Digital – where design, technology, and marketing come together.
          </p>
          <p className="intro-text">
            We specialize in developing and building custom websites tailored to your
            business needs, managing campaigns and smart digital marketing, and
            creating unique designs that set you apart from the competition.
            <br /><br />
            Whether it’s a new website, a distinctive logo, or social media designs –
            with us, you’ll find a complete solution in one place.
          </p>
        </div>
      </section>
    </>
  );
}
