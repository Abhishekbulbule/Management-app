import React, { useEffect, useState } from "react";
import Boxes from "./components/Boxes";
import { useDispatch } from "react-redux";
import { getEmployees } from "./redux_app/Employee/employee";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HailIcon from "@mui/icons-material/Hail";
const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  const routes = [
    {
      name: "Add",
      link: "/add",
    },
    {
      name: "Manage",
      link: "/view",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
  ];
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <HailIcon />
          {/* <Typography
            variant="h6"
            sx={{
              marginY: 1,
              fontWeight: "bold",
              color: "",
            }}
          >
            Employee Management App
          </Typography> */}
          <Typography
            variant="h6"
            sx={{
              marginY: 2, // Slightly increased vertical margin for better spacing
              fontWeight: "bold",
              color: "white", // Rich dark blue color for text
              borderRadius: 1, // Slightly rounded corners
              padding: 1, // Padding for a bit of breathing space around the text
            }}
          >
            Employee Management App
          </Typography>
        </Toolbar>
        <Boxes links={routes} />
      </AppBar>
    </>
  );
};

export default Homepage;
