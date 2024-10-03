import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "./Redux-app/Employee/employee";

const ViewEmployeesPage = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const temporaryData = {
    name: "Abhishek",
    age: "23",
    gender: "Male",
    email: "abhibulbule1@gmail.com",
    salary: 20000,
  };
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employee);
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  if (loading) {
    return <p className="text-center m-3 ">Loading!!!</p>;
  }
  return (
    <div className=" flex flex-col w-full h-full justify-center items-center">
      <h2 className="text-xl w-[100%] py-2 text-gray-600 sm:m-1 my-3 text-center font-bold">
        All Employees List
      </h2>
      <table className="border border-gray-600 w-[90%] ">
        <thead>
          <tr>
            <th className="py-2 border border-gray-600">Sr No-</th>
            <th className="py-2 border border-gray-600">Name</th>
            <th className="py-2 border border-gray-600">Age</th>
            <th className="py-2 border border-gray-600">Gender</th>
            <th className="py-2 border border-gray-600">Email</th>
            <th className="py-2 border border-gray-600">Salary</th>
          </tr>
        </thead>
        {employees.map((employeeData, index) => (
          <tbody key={index}>
            <tr>
              <td className="py-2 text-center text-wrap border border-gray-500">
                {index + 1}
              </td>
              <td className="py-2 text-center text-wrap border border-gray-500">
                {employeeData.name}
              </td>
              <td className="py-2 text-center text-wrap border border-gray-500">
                {employeeData.age}
              </td>
              <td className="py-2 text-center text-wrap border border-gray-500">
                {employeeData.gender}
              </td>
              <td className="py-2 text-center text-wrap border border-gray-500">
                {employeeData.email}
              </td>
              <td className="py-2 text-center text-wrap border border-gray-500">
                {employeeData.salary}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ViewEmployeesPage;
