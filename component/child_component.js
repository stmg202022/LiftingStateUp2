import React from "react";

const Child = (props) => {
  const info = {
    firstname: "Samson",
    lastname: "Tamang",
    age: 23
  };

  //const firstname = "Samson";

  const { handleMe } = props;

  return (
    <div>
      <h1>Child Component</h1>
      <button
        onClick={() => {
          handleMe({ info });
        }}
      >
        Click
      </button>
    </div>
  );
};

module.exports = { Child };
