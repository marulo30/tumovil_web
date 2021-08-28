import React from "react";
import "./Panel.css";

function PanelRight(props) {
  return (
    <>
      <div className="panel-container">
        <figure className="panel__item__pic-wrap" data-category={props.label}>
          <img className="panel__item__img" src={props.image} alt="imagen" />
        </figure>

        <div className={"features-slider " + props.style}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default PanelRight;
