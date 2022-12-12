import React, { useState } from "react";
import img1 from "../../assets/react-counter.png";
import "../Test/test.css";

function Test() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="form">
      <div>Hello World Page </div>
      <p>Counter: {counter}</p>
      <div>
        <button  onClick={increaseCounter} className="increase-count">
          +
        </button>
        <button onClick={decreaseCounter} className="increase-count">
          -
        </button>
      </div>
      <a href="https://glitch.com/edit/#!/html-jss-counter" target="_blank">
        Link to raw HTML/JS counter
      </a>
      <div className="images">
        <div>
          <p>React way of doing it</p>
          <img src={img1}></img>
        </div>
      </div>
    </div>
  );
}

export default Test;
