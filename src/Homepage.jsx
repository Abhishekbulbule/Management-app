import React from "react";
import Boxes from "./components/Boxes";
import { useDispatch } from "react-redux";
import { getEmployees } from "./Redux-app/Employee/employee";

const Homepage = () => {
  const dispatch = useDispatch();
  dispatch(getEmployees());
  return (
    <div className="w-[100%] h-full m-3 md:max-m-1 flex flex-wrap justify-center items-center">
      <h1 className="text-3xl w-full m-5 md:min-m-2  text-center font-bold text-gray-800">
        Employee Management App
      </h1>
      <Boxes name="View Employees" link="/view" />
      <Boxes name="Add Employee Details" link="/add" />
      <Boxes name="Update Employee Details" link="/update" />
      <Boxes name="Manage Employees Details" link="/manage" />
    </div>
  );
};

export default Homepage;
