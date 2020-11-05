import { evaluate, format } from "mathjs";

export default function calculate(obj, buttonName) {
  if (buttonName === "CLR") {
    obj.updateEquation([]);
    obj.setTotal(0);
  } else if (buttonName === "DEL") {
    // Pop off the last added item into the array
    obj.updateEquation((oldEquation) => oldEquation.slice(0, -1));
  } else if (buttonName === "=") {
    // Create expression string
    let expression = obj.equation.join("");
    // Reset equation
    obj.updateEquation([]);
    // Evaluate expression
    let result;
    try {
      result = evaluate(expression);
      console.log("Result is", result);
      result = format(result, { precision: 14 });
    } catch (err) {
      result = "Invalid Expression!";
    }
    obj.setTotal(result);
    // Make expression prettier for display
    expression = expression.concat("=", result);
    return expression;
  } else {
    // If there's more elements being added to the equation, then reset the total
    obj.updateEquation((oldEquation) => [...oldEquation, buttonName]);
    obj.setTotal(0);
  }
  return "";
}
