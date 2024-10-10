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
          <Typography
            variant="h6"
            sx={{
              marginY: 1,
              fontWeight: "bold",
              color: "",
            }}
          >
            Employee Management App
          </Typography>
        </Toolbar>
      </AppBar>
      <Boxes links={routes} />
    </>
  );
};

export default Homepage;
