import React from "react";
import Banner from "../components/Banner/Banner";
import ReasonsSection from "../components/Multicolumn/multicolumn";
import ServicesSection from "../components/Services/Services";
import WorksSection from "../components/Work/WorkSection";
import TestimonialsSection from "../components/Testimonial/Testimonial";
import FAQSection from "../components/Faq/faq";
import CTASection from "../components/ctaSection";

export default function Home() {
  return (
    <>
      <Banner />
      <ReasonsSection/>
      <ServicesSection/>
      <WorksSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <CTASection/>
    </>
  );
}
