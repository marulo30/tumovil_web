import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import Hero from "../Hero";

export default function Contacto() {
  return (
    <>
      <Hero
        title="CONTACTO"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor felis id varius vulputate."
        image="images/ayuda.jpg"
      />
      <Cards />
      <Footer />
    </>
  );
}
