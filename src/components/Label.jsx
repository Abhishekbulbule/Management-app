import React from "react";

const Label = ({ hFor = "", className = "", labelText }) => {
  return (
    <label htmlFor={hFor} className={className}>
      {labelText}
    </label>
  );
};

export default Label;
