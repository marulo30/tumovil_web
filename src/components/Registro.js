import React from "react";
import { Button } from "./Button";
import "./Registro.css";

function Registro() {
  return (
    <>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Regístrate para recibir información
        </p>
        <div className="input-areas" id="registro-form">
          <form>
            <input
              type="name"
              name="name"
              placeholder="Tu nombre"
              className="footer-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              className="footer-input"
            />
            <input
              type="text"
              name="phone"
              placeholder="Tu numero"
              className="footer-input"
            />
            <Button buttonStyle="botn--green">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Registro;
