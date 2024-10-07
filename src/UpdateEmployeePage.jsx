import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees, updateEmployee } from "./redux_app/Employee/employee";
import { useNavigate, useParams } from "react-router-dom";
import { INPUTS_DATA, LABEL_DATA } from "./StaticData";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";

const UpdateEmployeePage = () => {
  const { employees } = useSelector((state) => state.employee);
  const { index } = useParams();
  const [formError, setError] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = employees[index];
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    salary: "",
  });
  useEffect(() => {
    if (employee) {
      setFormData((prevData) => ({ ...prevData, ...employee }));
    }
  }, [employee]);

  if (!employee) {
    return <p className="text-center m-3 ">Loading!!!</p>;
  }

  const handleValueChange = (e) => {
    let { name, value } = e.target;
    if (
      (name === "age" || name === "salary") &&
      value.startsWith("0") &&
      value.length > 1
    ) {
      value = value.replace(/^0+/, ""); // Remove leading zeros
    }
    if (name === "name") {
      value = value.replace(/[^a-zA-Z\s]/g, ""); // Remove anything that's not a letter or space
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateFormData = () => {
    const { name, age, email, gender, salary } = formData;
    if (!name.trim() || !age || !email.trim() || !salary || !gender.trim()) {
      setError("Fill All Credentials!!");
      return false;
    } else if (!email.includes("@gmail.com")) {
      //ToDO: regex for email
      setError("Fill Valid Email!");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleClick = (e) => {
    const { name, age, gender, email, salary } = formData;
    e.preventDefault();
    if (!validateFormData()) {
      return;
    } else {
      setError("");
    }
    dispatch(
      updateEmployee({
        updatedEmployee: { name, age, email, gender, salary },
        index,
      })
    );
    navigate("/view");
  };
  return (
    <div className="grid grid-cols-1 place-items-center ">
      <h2 className=".header_two">Update Employee Details</h2>
      <p className="error">{formError} </p>
      <form onSubmit={handleClick} className="form">
        {INPUTS_DATA?.map((input, index) =>
          input.type === "radio" ? (
            <div className="grid grid-rows-1" key="gender">
              <p className="label">Select Gender</p>

              <div className="flex flex-row" id="gender">
                <Input
                  {...INPUTS_DATA[index]}
                  value="Male"
                  id={INPUTS_DATA[index].options[0].id}
                  checked={formData.gender === "Male"}
                  onChange={handleValueChange}
                />
                <Label classes="mx-1" hFor="gender_male" labelText="Male" />
                <Input
                  {...INPUTS_DATA[index]}
                  id={INPUTS_DATA[index].options[1].id}
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleValueChange}
                />
                <Label classes="mx-1" hFor="gender_female" labelText="Female" />
              </div>
            </div>
          ) : (
            <div className="grid grid-rows-1" key={input.id}>
              <Label {...LABEL_DATA[index]} />
              <Input
                {...input}
                value={formData[input.name] || ""}
                onChange={handleValueChange}
              />
            </div>
          )
        )}

        <Button type="submit" label="Submit" classes="btn" />
      </form>
    </div>
  );
};

export default UpdateEmployeePage;
