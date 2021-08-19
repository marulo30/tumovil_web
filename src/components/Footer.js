import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Acerca de nosotros</h2>
            <Link to="/">Como funciona</Link>
            <Link to="/">Testimonios</Link>
            <Link to="/">Terminos de Servicio</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contáctanos</h2>
            <Link to="/">Contacto</Link>
            <Link to="/">Soporte</Link>
            <Link to="/">Preguntas frecuentes</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Descarga la app</h2>
            <a href="https://play.google.com/store/apps/details?id=com.tumovil.rider">
              <img
                className="download-android"
                src="/images/icon-android.svg"
                alt="android-logo"
              />
              Andorid
            </a>
            <a href="https://apps.apple.com/us/app/tu-m%C3%B3vil/id1471249949?l=es">
              <img
                className="download-apple"
                src="/images/icon-ios.svg"
                alt="apple-logo"
              />
              iOs
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TuMovil <i class="fas fa-wifi" />
            </Link>
          </div>
          <small className="website-rights">TuMovil® 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            {/* <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
