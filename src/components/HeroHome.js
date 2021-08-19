import React from "react";
import { Button } from "./Button";
import "./HeroHome.css";

function HeroHome(props) {
  // const background_h = "url(" + props.image + ") center center/cover no-repeat";
  return (
    <div className="heroh-container">
      {/* <div className="heroh-container" style={{ background: background_h }}> */}
      <video src={props.video} autoPlay loop muted />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <div className="heroh-botns">
        <Button
          href="/clientes"
          className="botns"
          buttonStyle="botn--outline"
          buttonSize="botn--large"
        >
          ALIADOS
        </Button>
        <Button
          href="/pasajeros"
          className="botns"
          buttonStyle="botn--primary"
          buttonSize="botn--large"
        >
          PASAJEROS
        </Button>
        <Button
          href="/faqs"
          className="botns"
          buttonStyle="botn--outline"
          buttonSize="botn--large"
        >
          CORPORATIVOS
        </Button>
      </div>
    </div>
  );
}

export default HeroHome;
