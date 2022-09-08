import "./styles.css";
import { useState } from "react";
import { Child } from "../component/child_component";

export default function App() {
  //
  //function donot contain constructor . so used useState Hook
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    age: ""
  });

  //Again i assign above info for simplicity
  const { firstname, lastname, age } = info;

  const handleClick = (props) => {
    //
    const { info } = props;

    //Again i assign above props.info for simplicity
    let { firstname, lastname, age } = info;

    setInfo({
      firstname: firstname,
      lastname: lastname,
      age: age
    });
  };

  return (
    //
    <div className="App">
      {/*  */}

      {/*  */}
      <Child handleMe={handleClick} />
      {/*  */}

      {/*  */}
      <p>Name: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Age: {age}</p>
      {/*  */}

      {/*  */}
    </div>
  );
}
