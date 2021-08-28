import React from "react";
import "./Panel.css";

function PanelLeft(props) {
  return (
    <>
      <div className="panel-container">
        <div className={"features-slider " + props.style}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <figure className="panel__item__pic-wrap" data-category={props.label}>
          <img className="panel__item__img" src={props.image} alt="imagen" />
        </figure>
      </div>
    </>
  );
}

export default PanelLeft;
