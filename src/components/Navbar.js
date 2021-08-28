import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              className="navbar-img"
              src="images/Logo_color.png"
              alt="tumovil logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/aliados"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Aliados
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pasajeros"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pasajeros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/corporativos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Corporativos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ayuda" className="nav-links" onClick={closeMobileMenu}>
                Ayuda
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Registrate
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="botn--green">REGISTRATE</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// #161a29
// #4ddda3
