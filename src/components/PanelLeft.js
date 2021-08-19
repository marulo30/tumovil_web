import React from "react";
import "./Panel.css";

function PanelLeft(props) {
  return (
    <>
      <div className="panel-container">
        <div className={"features-slider " + props.style}>
          <h2>Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
            tristique felis, vitae tempus magna. Proin sit amet hendrerit sem.
            Curabitur nec mauris vehicula, ultrices massa placerat, vulputate
            tortor. Aliquam erat volutpat. In at lacus molestie, hendrerit nisl
            a, fermentum lacus. Ut vel leo lorem. Integer velit tellus.
          </p>
        </div>
        <figure className="panel__item__pic-wrap" data-category={props.label}>
          <img className="panel__item__img" src={props.image} alt="imagen" />
        </figure>
      </div>
    </>
  );
}

export default PanelLeft;
