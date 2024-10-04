import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "./Redux-app/Employee/employee";

const AddEmployeePage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState(" ");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !age.trim() ||
      !email.trim() ||
      !salary.trim() ||
      !gender.trim()
    ) {
      setError("Fill All Credentials!!");
      return;
    }
    if (!email.includes("@gmail.com")) {
      //ToDO: regex for email
      setError("Fill Valid Email!");
      return;
    }
    dispatch(addEmployee({ name, age, email, gender, salary }));
    setAge("");
    setEmail("");
    setName("");
    setGender("");
    setSalary("");
    setError(" ");
  };
  return (
    <div className="grid grid-col-1 place-items-center ">
      <h2 className="text-xl w-[100%] py-2 text-center text-gray-600 my-1 font-bold">
        Add Employee Details
      </h2>
      <p className="text-red-500 text-center text-sm">{error}&nbsp;</p>
      <form
        onSubmit={handleClick}
        className="grid grid-col-1 gap-3 max-w-lg w-full px-2 lg:px-0"
      >
        <div className=" grid grid-rows-1">
          <label className="font-medium text-gray-600 px-2" htmlFor="name">
            Enter Name
          </label>
          <input
            className="p-2 border  border-gray-500 rounded-lg text-gray-600"
            type="text"
            id="name"
            name="name"
            required={true}
            value={name}
            placeholder="Enter Employee Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className=" grid grid-rows-1">
          <label className="font-medium text-gray-600 px-2" htmlFor="age">
            Enter Age
          </label>
          <input
            className="p-2  border border-gray-500 rounded-lg text-gray-600"
            type="number"
            id="age"
            name="age"
            min={18}
            max={80}
            required={true}
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="Enter age"
          />
        </div>
        <div className="grid grid-rows-1">
          <label className="font-medium text-gray-600 px-2" htmlFor="gender">
            Enter Gender
          </label>
          <div className="flex flex-row">
            <span className="ml-2 text-gray-600">Male</span>
            <input
              className="mr-3 "
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            />
            <span className="ml-2 text-gray-600">Female</span>
            <input
              className="mr-3"
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="grid grid-rows-1">
          <label className="font-medium text-gray-600 px-2" htmlFor="email">
            Enter Email
          </label>
          <input
            className="p-2 border border-gray-500 rounded-lg text-gray-600"
            type="email"
            id="email"
            value={email}
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="grid grid-rows-1">
          <label className="font-medium text-gray-600 px-2" htmlFor="salary">
            Enter Salary
          </label>
          <input
            className="p-2 border border-gray-500 rounded-lg text-gray-600"
            type="number"
            id="salary"
            min={6000}
            value={salary}
            required={true}
            name="salary"
            onChange={(e) => {
              setSalary(e.target.value);
            }}
            placeholder="Enter Salary"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
        />
      </form>
    </div>
  );
};

export default AddEmployeePage;
