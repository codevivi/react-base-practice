import "./SquareMaker.scss";
import Button from "../../Button/Button";
import Square from "./Square";
import { useState } from "react";

export default function SquareMaker() {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <h1>Square Maker</h1>

      <Button handleClick={add} color="blue" text="add" />
      <div className="square-container" style={{}}>
        {[...Array(count)].map((_, i) => (
          <Square key={i} />
        ))}
      </div>
    </>
  );
}
