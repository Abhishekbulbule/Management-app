import React from "react";
// todo static data store in const and fetch it //do regex for email
const Input = ({
  classes,
  type,
  id,
  name,
  min,
  max,
  required,
  value,
  onchange,
  placeholder,
}) => {
  return (
    <input
      className={classes}
      type={type}
      id={id}
      name={name}
      min={min}
      max={max}
      required={required}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
    />
  );
};

export default Input;
