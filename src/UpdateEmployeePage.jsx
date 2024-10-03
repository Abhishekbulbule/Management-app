import React from "react";

const UpdateEmployeePage = () => {
  return (
    <div>
      <div className="grid grid-col-1 place-items-center ">
        <h2 className="text-xl w-[100%] py-2 text-center text-gray-600 my-3 font-bold">
          Update Employee Details
        </h2>
        <form className="grid grid-col-1 gap-2">
          <div className=" grid grid-rows-1">
            <label className="font-medium text-gray-600 px-2" htmlFor="name">
              Enter Name
            </label>
            <input
              className="p-2 border  border-gray-500 rounded-lg text-gray-600"
              type="text"
              id="name"
              name="name"
              placeholder="Enter Employee Name"
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
              />
              <span className="ml-2 text-gray-600">Female</span>
              <input
                className="mr-3"
                type="radio"
                name="gender"
                value="Female"
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
              name="salary"
              placeholder="Enter Salary"
            />
          </div>
          <button className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployeePage;
