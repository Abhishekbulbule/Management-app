import { TextField } from "@mui/material";
import React from "react";
// todo static data store in const and fetch it //do regex for email
const Input = (props) => {
  return (
    // <input
    //   className={className}
    //   type={type}
    //   id={id}
    //   name={name}
    //   min={min}
    //   max={max}
    //   required={required}
    //   value={value}
    //   onChange={onChange}
    //   placeholder={placeholder}
    //   checked={checked}
    //   autoComplete={name}
    // />

    <TextField
      id="standard-basic"
      label={props.name.toUpperCase()}
      variant="standard"
      {...props}
    />
  );
};

export default Input;
