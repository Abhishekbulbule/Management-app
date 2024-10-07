import React from "react";

const Label = ({ htmlFor = "", className = "", labelText }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {labelText}
    </label>
  );
};

export default Label;
