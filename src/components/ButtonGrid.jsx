import React from "react";
import Button from "./Button";
import "./ButtonGrid.css";

const ButtonGrid = (props) => {
  const clickHandler = (buttonName) => {
    props.clickHandler(buttonName);
  };
  return (
    <div className="button-grid">
      <div>
        <Button value="Clear" clickHandler={clickHandler} />
        <Button value="(-)" clickHandler={clickHandler} />
        <Button value="%" clickHandler={clickHandler} />
        <Button value="÷" clickHandler={clickHandler} isOperation />
      </div>
      <div>
        <Button value="7" clickHandler={clickHandler} />
        <Button value="8" clickHandler={clickHandler} />
        <Button value="9" clickHandler={clickHandler} />
        <Button value="x" clickHandler={clickHandler} isOperation />
      </div>
      <div>
        <Button value="4" clickHandler={clickHandler} />
        <Button value="5" clickHandler={clickHandler} />
        <Button value="6" clickHandler={clickHandler} />
        <Button value="-" clickHandler={clickHandler} isOperation />
      </div>
      <div>
        <Button value="1" clickHandler={clickHandler} />
        <Button value="2" clickHandler={clickHandler} />
        <Button value="3" clickHandler={clickHandler} />
        <Button value="+" clickHandler={clickHandler} isOperation />
      </div>
      <div>
        <Button value="0" clickHandler={clickHandler} />
        <Button value="." clickHandler={clickHandler} />
        <Button value="=" clickHandler={clickHandler} isOperation />
      </div>
    </div>
  );
};

export default ButtonGrid;
