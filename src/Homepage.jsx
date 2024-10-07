import React, { useEffect } from "react";
import Boxes from "./components/Boxes";
import { useDispatch } from "react-redux";
import { getEmployees } from "./redux_app/Employee/employee";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <div className="w-[100%] h-full md:max-m-1 flex flex-wrap justify-center items-center">
      <h1 className="text-3xl w-full my-5 md:min-m-2  text-center font-bold text-gray-800">
        Employee Management App
      </h1>
      <Boxes name="Manage Employees" link="/view" />
      <Boxes name="Add Employee Details" link="/add" />
      <Boxes name="Gallery" link="/gallery" />
    </div>
  );
};

export default Homepage;
