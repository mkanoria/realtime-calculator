import React from "react";
import "./Button.css";

const Button = (props) => {
  const handleClick = () => {
    props.clickHandler(props.value);
  };

  return (
    <div className={props.isOperation ? "button-orange" : "button"}>
      <button onClick={handleClick}>{props.value}</button>
    </div>
  );
};

export default Button;
