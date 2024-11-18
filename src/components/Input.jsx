import { TextField } from "@mui/material";
import React from "react";
// todo static data store in const and fetch it //do regex for email
const Input = (props) => {
  return (
    <TextField
      id="standard-basic"
      label={props.name.charAt(0).toUpperCase().concat(props.name.slice(1))}
      required
      variant="filled"
      sx={{ width: "100%" }}
      {...props}
    />
  );
};

export default Input;
