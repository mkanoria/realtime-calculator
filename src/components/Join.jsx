import React from "react";

import "./Join.css";

const Join = (props) => {
  const { setName, join } = props;
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button className={"button mt-20"} type="submit" onClick={join}>
          Start!
        </button>
      </div>
    </div>
  );
};

export default Join;
