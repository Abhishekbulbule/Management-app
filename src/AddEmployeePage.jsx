import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "./redux_app/Employee/employee";
import Button from "./components/Button";
import Label from "./components/Label";
import Input from "./components/Input";
import { INPUTS_DATA, LABEL_DATA } from "./StaticData";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";

import Radio from "@mui/material/Radio";

const AddEmployeePage = () => {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Female",
    email: "",
    salary: "",
  });
  const dispatch = useDispatch();

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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name.trim() || !age || !email.trim() || !salary || !gender.trim()) {
      setError("Fill All Credentials!!");
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Fill Valid Email!");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!validateFormData()) {
      return;
    } else {
      setError("");
    }
    dispatch(addEmployee(formData));
    setFormData({
      name: "",
      age: "",
      gender: "",
      email: "",
      salary: "",
    });
  };

  return (
    <div className="grid grid-col-1 place-items-center ">
      <h2 className="header_two">Add Employee Details</h2>
      <p className="error">{error}&nbsp;</p>
      <form onSubmit={handleClick} className="form">
        {INPUTS_DATA.map((input, index) =>
          input.type === "radio" ? (
            <FormControl key={input.name}>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={formData.gender}
                onChange={handleValueChange}
              >
                <FormControlLabel
                  name="gender"
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  name="gender"
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          ) : (
            // <div className="grid grid-rows-1" key="gender">
            //   {/* <p className="label">Select Gender</p> */}

            //   <div className="grid grid-rows-1 gap-2" id="gender">
            //     <Input
            //       {...INPUTS_DATA[index]}
            //       type="radio"
            //       value="Male"
            //       label="Male"
            //       id={INPUTS_DATA[index].options[0].id}
            //       checked={formData.gender === "Male"}
            //       onChange={handleValueChange}
            //     />
            //     {/* <Label className="mx-1 " hFor="gender_male" labelText="Male" /> */}
            //     <Input
            //       {...INPUTS_DATA[index]}
            //       id={INPUTS_DATA[index].options[1].id}
            //       label="Female"
            //       value="Female"
            //       checked={formData.gender === "Female"}
            //       onChange={handleValueChange}
            //     />
            //     {/* <Label
            //       className="mx-1"
            //       hFor="gender_female"
            //       labelText="Female"
            //     /> */}
            //   </div>
            // </div>
            <div className="grid grid-rows-1" key={input.id}>
              {/* <Label {...LABEL_DATA[index]} /> */}
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

export default AddEmployeePage;
