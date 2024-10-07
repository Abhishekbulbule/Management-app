import React from "react";
// todo static data store in const and fetch it //do regex for email
const Input = ({
  className,
  type,
  id,
  name,
  min,
  max,
  required,
  value,
  onChange,
  placeholder,
  checked,
}) => {
  return (
    <input
      className={className}
      type={type}
      id={id}
      name={name}
      min={min}
      max={max}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      checked={checked}
      autoComplete={name}
    />
  );
};

export default Input;
