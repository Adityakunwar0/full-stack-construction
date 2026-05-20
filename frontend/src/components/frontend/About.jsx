import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { default as AboutNew } from "../common/About";
import Hero from "../common/Hero";
import ShowTestimonial from "../common/ShowTestimonial";
import Team from "../common/Team";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="About Us"
          text=" we excel at transforming vision into relaity <br/> through outstanding craftmanship and precise."
        />

        <AboutNew />

        {/* Our Team */}
        <Team />

        <ShowTestimonial />
      </main>

      <Footer />
    </>
  );
};

export default About;
