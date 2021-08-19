import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Contamos con grandes beneficios</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/security.jpg"
              text="Al escoger a un vehículo a través de la aplicación Tumovil te estamos garantizando un servicio LEGAL con calidad y profesionalismo. Tu sabes quien conduce, nosotros sabemos quien viaja. Todos los vehículos cuentan con toda la documentación legal exigida por las autoridades."
              label="Legalidad y seguridad"
              // path="/services"
            />
            <CardItem
              src="images/comfort.jpg"
              text="Al elegir un vehículo a través de la aplicación Tumovil, estas eligiendo LEGALIDAD calidad y confort. Todos los vehículos cuentan con la comodidad que buscas."
              label="Comfort"
              // path="/services"
            />
            <CardItem
              src="images/money.jpg"
              text="Te ofrecemos las mejores tarifas acordes con el servicio que recibes. La aplicación te entregara un estimado del valor del recorrido que desees hacer. Nuestro aliado te informara del valor final. "
              label="Tarifas"
              // path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
