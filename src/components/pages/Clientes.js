import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Hero from "../Hero";
import PanelLeft from "../PanelLeft";
import PanelRight from "../PanelRight";
import Registro from "../Registro";

export default function Clientes() {
  return (
    <>
      <Hero
        title="ALIADOS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor felis id varius vulputate."
        // image="images/driver.jpg"
        video="/videos/video-1.mp4"
      />
      <PanelLeft style="panel-uno" image="/images/img-1.jpg" />
      <PanelRight style="panel-dos" image="/images/img-2.jpg" />
      <PanelLeft style="panel-tres" image="/images/img-3.jpg" />
      <PanelRight style="panel-uno" image="/images/img-7.jpg" />
      <PanelLeft style="panel-dos" image="/images/img-8.jpg" />
      <PanelRight style="panel-tres" image="/images/img-9.jpg" />
      <Registro />
      <Footer />
    </>
  );
}
