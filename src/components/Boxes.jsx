import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./ButtonComponent";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@mui/material";
const Boxes = ({ links }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/view":
        setValue(path);
        break;

      case "/add":
        setValue(path);
        break;

      case "/gallery":
        setValue(path);
        break;

      default:
        setValue("/view");
        break;
    }
  });
  const handleButtonClick = (event, link) => {
    setValue(link);
    switch (link) {
      case "/view":
        navigate(link);
        break;

      case "/add":
        navigate(link);
        break;

      case "/gallery":
        navigate(link);
        break;

      default:
        break;
    }
  };
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleButtonClick}
        sx={{
          backgroundColor: "#f8f9fa",
          boxShadow: 1,
        }}
      >
        {links.map((element, index) => (
          <BottomNavigationAction
            key={element.name + index}
            sx={{
              color: "#33335b",
              fontWeight: "bold",
              borderBottom: 3,
              borderColor: "GrayText",
              "&.Mui-selected": {
                borderColor: "#007BFF",
                color: "#007BFF",
                backgroundColor: "#e9ecef",
              },
              margin: 1,
              "&:hover": {
                backgroundColor: "#f1f3f5",
              },
            }}
            label={element.name}
            value={element.link}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

// Boxes.propTypes = {
//   links: {
//     name: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//   },
// };

export default Boxes;
