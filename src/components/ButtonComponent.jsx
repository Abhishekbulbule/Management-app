import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({ label, type = "Button", onClick }) => {
  return (
    // <button className={classes} onClick={onclick}>
    //   {label}
    // </button>

    <Button
      type={type}
      label={label}
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: "#1976d2",
        color: "#fff",
        padding: "8px 16px",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "8px",
        boxShadow:
          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)", // Subtle shadow
        "&:hover": {
          backgroundColor: "#1565c0",
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: "#1565c0",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
