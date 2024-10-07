import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Boxes = (props) => {
  const navigate = useNavigate();
  const handleButtonClick = (link) => {
    switch (link) {
      case "/view":
        navigate(link);
        break;

      case "/add":
        navigate(link);
        break;

      case "/gallery":
        navigate(link);
        break;

      default:
        break;
    }
  };
  return (
    <div className="m-2 text-center ">
      <Button
        label={props.name}
        classes="btn"
        onclick={() => handleButtonClick(props.link)}
      />
    </div>
  );
};

Boxes.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Boxes;
