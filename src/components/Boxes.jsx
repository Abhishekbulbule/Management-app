import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
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
      <BottomNavigation showLabels value={value} onChange={handleButtonClick}>
        {/* {links.map((element, index) => ( */}
        <BottomNavigationAction
          sx={{
            color: "#33335b",
            fontWeight: "bold",
            borderBottom: 3,
            borderColor: "GrayText",
            "&.Mui-selected": {
              borderColor: "Highlight",
            },
            margin: 1,
          }}
          label={links[0].name}
          value={links[0].link}
        />
        <BottomNavigationAction
          sx={{
            color: "#33335b",
            borderBottom: 3,
            borderColor: "GrayText",
            fontWeight: "bold",
            "&.Mui-selected": {
              borderColor: "Highlight",
            },
            margin: 1,
          }}
          label={links[1].name}
          value={links[1].link}
        />
        <BottomNavigationAction
          sx={{
            borderBottom: 3,
            borderColor: "GrayText",
            color: "#33335b",
            fontWeight: "bold",
            "&.Mui-selected": {
              borderColor: "Highlight",
            },
            margin: 1,
          }}
          label={links[2].name}
          value={links[2].link}
        />
        {/* ))} */}
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
