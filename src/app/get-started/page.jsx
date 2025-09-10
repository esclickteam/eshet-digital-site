"use client";
import GetStartedForm from "../../../components/GetStartedForm";
import "./getStartedPage.css";

export default function GetStartedPage() {
  return (
    <main className="get-started-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Start Your Project</h1>
          <p>
            Ready to grow your business with a custom digital solution?  
            Fill out the form below and let’s make it happen.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-wrapper">
        <GetStartedForm />
      </section>
    </main>
  );
}
