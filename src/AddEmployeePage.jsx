import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "./Redux-app/Employee/employee";
import Button from "./components/Button";
import Label from "./components/Label";
import Input from "./components/Input";

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
        className="grid grid-col-1 gap-3 max-w-lg w-full px-2 lg:px-0 text-gray-600"
      >
        <div className=" grid grid-rows-1">
          <Label hFor="name" classes="label" labelText="Enter Name" />
          <Input
            classes="input"
            name="name"
            id="name"
            type="text"
            required={true}
            value={name}
            placeholder="Enter Employee Name"
            onchange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* <input
            className="p-2 border border-gray-500 rounded-lg "
            type="text"
            id="name"
            name="name"
            required={true}
            value={name}
            placeholder="Enter Employee Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          /> */}
        </div>
        <div className=" grid grid-rows-1">
          <Label hFor="age" classes="label" labelText="Enter Age" />
          <input
            className="p-2 border border-gray-500 rounded-lg "
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
          <Label hFor="gender" classes="label" labelText="Enter Gender" />

          <div className="flex flex-row">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            />
            <span className="mx-1 ">Male</span>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            />
            <span className="mx-1 ">Female</span>
          </div>
        </div>
        <div className="grid grid-rows-1">
          <Label hFor="email" classes="label" labelText="Enter Email" />
          <input
            className="p-2 border border-gray-500 rounded-lg "
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
          <Label hFor="salary" classes="label" labelText="Enter Salary" />
          <input
            className="p-2 border border-gray-500 rounded-lg "
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

        <Button type="submit" label="Submit" classes="btn" />
      </form>
    </div>
  );
};

export default AddEmployeePage;
