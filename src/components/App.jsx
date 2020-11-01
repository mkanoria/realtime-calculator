import React, { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import calculate from "../operations/calculate";

const App = () => {
  const [total, setTotal] = useState(0);
  const [nextVal, setNextVal] = useState(0);
  const [operation, setOperation] = useState("");

  const handleClick = (buttonName) => {
    console.log("Click handler pressed" + buttonName);
    const updatedVal = calculate({ total, nextVal, operation }, buttonName);
    // Update state to new values
    setTotal(updatedVal.total);
    setNextVal(updatedVal.nextVal);
    setOperation(updatedVal.operation);
  };

  return (
    <div className="app">
      <Display value={total} />
      <ButtonGrid clickHandler={handleClick} />
    </div>
  );
};

export default App;
