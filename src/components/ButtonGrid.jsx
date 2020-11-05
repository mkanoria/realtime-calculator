import React from "react";
import Button from "./Button";
import "./ButtonGrid.css";

const ButtonGrid = (props) => {
  const clickHandler = (buttonName) => {
    props.clickHandler(buttonName);
  };
  return (
    <div className="component-button-grid">
      <div>
        <Button value="CLR" clickHandler={clickHandler} />
        <Button value="^" clickHandler={clickHandler} />
        <Button value="%" clickHandler={clickHandler} />
        <Button value="/" clickHandler={clickHandler} isOperation />
      </div>
      <div>
        <Button value="7" clickHandler={clickHandler} />
        <Button value="8" clickHandler={clickHandler} />
        <Button value="9" clickHandler={clickHandler} />
        <Button value="*" clickHandler={clickHandler} isOperation />
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
        <Button value="DEL" clickHandler={clickHandler} />
        <Button value="=" clickHandler={clickHandler} eval />
      </div>
    </div>
  );
};

export default ButtonGrid;
