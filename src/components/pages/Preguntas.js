import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import Hero from "../Hero";

export default function Preguntas() {
  return (
    <>
      <Hero
        title="PREGUNTAS FREQUENTES"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor felis id varius vulputate."
        image="images/ayuda.jpg"
      />
      <Cards />
      <Footer />
    </>
  );
}
