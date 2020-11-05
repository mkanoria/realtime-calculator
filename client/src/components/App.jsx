import React, { useState, useEffect } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import Join from "./Join";
import calculate from "../operations/calculate";
import "./App.css";
import socketIOClient from "socket.io-client";
import { ENDPOINT } from "../secrets";

let socket;
const App = () => {
  const [total, setTotal] = useState(0);
  const [equation, updateEquation] = useState([]);
  const [responses, setResponses] = useState([]);
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  let fetchedInitialResponses = false;

  const join = () => {
    if (username !== "") {
      setUsername(username);
      setLoggedIn(true);
    }
  };

  const handleClick = (buttonName) => {
    // Calculate and update state as required
    const expression = calculate(
      { total, equation, setTotal, updateEquation },
      buttonName
    );
    if (expression !== "" && !expression.includes("Invalid Expression!")) {
      socket.emit("message", { user: username, equation: expression });
      setResponses((prevResponses) => {
        if (prevResponses.length === 10) {
          prevResponses.shift();
        }
        return [...prevResponses, { user: username, equation: expression }];
      });
    }
  };

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    // If initial responses has not been received, call socket -> new user
    if (!fetchedInitialResponses) {
      socket.on("new user", (resp) => {
        fetchedInitialResponses = true;
        setResponses(resp);
      });
    }

    // If new message is broadcast, add it to list of existing responses
    socket.on("new message", (data) => {
      setResponses((prevResponses) => {
        if (prevResponses.length === 10) {
          prevResponses.shift();
        }
        return [...prevResponses, data];
      });
    });
  }, []);

  if (!loggedIn) {
    return (
      <div className="welcome-screen">
        <Join join={join} setName={setUsername} />
      </div>
    );
  }
  return (
    <div className="component-app">
      <Display
        value={
          equation === undefined || equation.length === 0
            ? total
            : equation.join("")
        }
      />
      <ButtonGrid clickHandler={handleClick} />
      {responses.map((response, index) => (
        <Display
          key={index}
          value={response.user + " calculated " + response.equation}
          isMessage
        />
      ))}
    </div>
  );
};

export default App;
