import React, {useState} from "react";

function Szamlalo(props) {

  const [count, setCount]=useState(0)

  function novel() {
    setCount(count+parseInt( props.inc))
  }

function csokkent() {
  setCount(count-parseInt(props.inc))
}

function zero() {
  setCount(0)
}

  return (
    <div className="container">
      <h1 style={count>10 ? {color:"red"} : {color: "white"}}>{count}</h1>
      <button onClick={csokkent}>-</button>
      <button onClick={novel}>+</button>
      <button onClick={zero}>0</button>
    </div>
  );
}

export default Szamlalo;
