export const INPUTS_DATA = [
  {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Enter Name",
    className: "input",
    required: true,
  },
  {
    type: "number",
    name: "age",
    id: "age",
    placeholder: "Enter Age",
    className: "input",
    required: true,
    min: 18,
    max: 60,
  },
  {
    type: "radio",
    name: "gender",
    options: [{ id: "gender_male" }, { id: "gender_female" }],
    placeholder: "Select Gender",
    className: "radio",
    required: true,
  },
  {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Enter Email",
    className: "input",
    required: true,
  },
  {
    type: "number",
    name: "salary",
    id: "salary",
    placeholder: "Enter Salary",
    className: "input",
    required: true,
    min: 2000,
    max: 99999,
  },
];

export const LABEL_DATA = [
  {
    hFor: "name",
    className: "label",
    labelText: "Enter Name",
  },
  {
    hFor: "age",
    className: "label",
    labelText: "Enter Age",
  },
  {
    hFor: "gender",
    className: "label",
    labelText: "Enter Gender",
  },
  {
    hFor: "email",
    className: "label",
    labelText: "Enter Email",
  },
  {
    hFor: "salary",
    className: "label",
    labelText: "Enter Salary",
  },
];
