import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["botn--primary", "botn--outline", "botn--green"];
const SIZES = ["botn--medium", "botn--large"];

export const Button = ({
  children,
  type,
  onClikc,
  buttonStyle,
  buttonSize,
  href,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={href ? href : "/"} className="botn-mobile">
      <button
        className={`botn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClikc}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
