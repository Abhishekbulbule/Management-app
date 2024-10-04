import React from "react";

const Label = ({ hFor = "", classes = "", labelText }) => {
  return (
    <label htmlFor={hFor} className={classes}>
      {labelText}
    </label>
  );
};

export default Label;
