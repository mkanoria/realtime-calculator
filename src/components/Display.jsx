import React from "react";
import "./Display.css";

const Display = (props) => {
  return (
    <div className={props.isMessage ? "message-display " : "component-display"}>
      <div>{props.value}</div>
    </div>
  );
};

export default Display;
