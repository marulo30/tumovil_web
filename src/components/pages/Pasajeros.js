import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Hero from "../Hero";
import PanelLeft from "../PanelLeft";
import PanelRight from "../PanelRight";

export default function Pasajeros() {
  return (
    <>
      <Hero
        title="PASAJEROS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor felis id varius vulputate."
        video="/videos/video-2.mp4"
        // image="images/pasajero.jpg"
      />
      <PanelRight style="panel-tres" image="/images/img-4.jpg" />
      <PanelLeft style="panel-uno" image="/images/img-5.jpg" />
      <PanelRight style="panel-dos" image="/images/img-6.jpg" />
      <Footer />
    </>
  );
}
