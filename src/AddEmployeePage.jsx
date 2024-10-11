import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "./redux_app/Employee/employee";
import ButtonComponent from "./components/ButtonComponent";
import Input from "./components/Input";
import { INPUTS_DATA, LABEL_DATA } from "./StaticData";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Stack,
  Typography,
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
    if (name === "age" && e.key.length === 1 && !/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }

    if (name === "age" && (value < 18 || value > 60)) {
      setError("Minimum age is 18 and maximum age is 60!!");
    } else {
      setError("");
    }
    if (name === "salary" && value < 5000) {
      setError("Minimum Salary is 5000!!");
    } else {
      setError("");
    }
    if (name === "name") {
      value = value.replace(/[^a-zA-Z\s]/g, ""); // Remove anything that's not a letter or space
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateFormData = () => {
    const { name, age, email, gender, salary } = formData;
    console.log(email);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name.trim() || !age || !email.trim() || !salary || !gender.trim()) {
      setError("Fill All Credentials!!");
      return false;
    }
    if (!emailRegex.test(email)) {
      console.log(email);
      setError("Fill Valid Email!");
      return false;
    }
    if (age < 18 || age > 60) {
      setError("Minimum age is 18 and maximum age is 60");
      return false;
    }
    setError("");
    return true;
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
    <Stack
      direction={"column"}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        component={"h2"}
        sx={{
          marginY: 2,
          fontWeight: 500,
          color: "#33335b",
          backgroundColor: "transparent",
          padding: 0,
          textAlign: "left",
        }}
      >
        Add Employee Details
      </Typography>
      <Typography
        variant="body1"
        component={"p"}
        sx={{
          fontWeight: 500,
          color: "red",
          backgroundColor: "transparent",
          padding: 0,
          textAlign: "left",
        }}
      >
        {error}&nbsp;
      </Typography>
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
                sx={{ flexDirection: "row" }}
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
            <Stack direction={"row"} key={input.id}>
              <Input
                {...input}
                value={formData[input.name] || ""}
                onChange={handleValueChange}
              />
            </Stack>
          )
        )}
        <ButtonComponent type="submit" label="Submit" classes="btn" />
      </form>
    </Stack>
  );
};

export default AddEmployeePage;
