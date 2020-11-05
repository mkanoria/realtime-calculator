import React from "react";
import "./Button.css";

const Button = (props) => {
  const handleClick = () => {
    props.clickHandler(props.value);
  };
  let classname = "";
  if (props.eval) {
    classname = "component-button eval";
  } else if (props.isOperation) {
    classname = "component-button orange";
  } else {
    classname = "component-button";
  }
  return (
    <div className={classname}>
      <button onClick={handleClick}>{props.value}</button>
    </div>
  );
};

export default Button;
