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
        text="Tumovil te proporciona seguridad, confort y precios de acuerdo a la calidad del servicio que recibes"
        video="/videos/video-2.mp4"
        // image="images/pasajero.jpg"
      />
      <PanelRight
        style="panel-tres"
        image="/images/img-4.jpg"
        title="Tumovil usuario"
        text="Calidad y Confort:   los vehiculos de transporte especial tienen la major valoracion en el mercado. Son Especiales.\n
        \n
        Precios: Las tarifas son competitivas y siempre podras ponerte de acuerdo en el precio y el medio de pago con el conductor aliado.\n
        \n        
        Reservas: Se pueden establecer reservas con 24 horas de anticipacion.
      "
      />
      <PanelLeft
        style="panel-uno"
        image="/images/img-5.jpg"
        title="Tumovil taxi"
        text="Alianzas con empresas acreditadas de servicio de taxis es una opcion que opera en ciudades intermedias. Con tu Movil puedes buscar el servicio de taxis en ciudades INTERMEDIAS.
      "
      />
      <PanelRight style="panel-dos" image="/images/img-6.jpg" />
      <Footer />
    </>
  );
}
