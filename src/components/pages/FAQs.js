import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import Hero from "../Hero";

export default function FAQs() {
  return (
    <>
      <Hero
        title="CORPORATIVOS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor felis id varius vulputate."
        image="images/faqs.jpg"
      />
      <Cards />
      <Footer />
    </>
  );
}
