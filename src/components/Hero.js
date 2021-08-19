import React from "react";
import "./Hero.css";

function Hero(props) {
  var background_h = "";
  if (props.image) {
    background_h = "url(" + props.image + ") center center/cover no-repeat";
  }

  return (
    <div className="hero-container" style={{ background: background_h }}>
      {props.video && <video src={props.video} autoPlay loop muted />}
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Hero;
