import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "./redux_app/Employee/employee";
import { useNavigate, useParams } from "react-router-dom";
import { INPUTS_DATA, LABEL_DATA } from "./StaticData";
import Button from "./components/ButtonComponent";
import Input from "./components/Input";
import Radio from "@mui/material/Radio";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFormData()) {
      return;
    } else {
      setError("");
    }
    dispatch(
      updateEmployee({
        data: formData,
        index,
      })
    );
    navigate("/view");
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
        Update Employee Details
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
        {formError}&nbsp;
      </Typography>
      <form onSubmit={handleSubmit} className="form">
        {INPUTS_DATA?.map((input, index) =>
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

        <Button type="submit" label="Submit" classes="btn" />
      </form>
    </Stack>
  );
};

export default UpdateEmployeePage;
