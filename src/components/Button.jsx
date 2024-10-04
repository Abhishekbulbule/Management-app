import React from "react";

const Button = ({ label, classes, type = "Button", onclick }) => {
  return (
    <button className={classes} onClick={onclick}>
      {label}
    </button>
  );
};

export default Button;
