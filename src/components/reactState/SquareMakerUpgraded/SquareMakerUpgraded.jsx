import "../SquareMaker/SquareMaker.scss";
import Square from "../SquareMaker/Square";
import Button from "../../Button/Button";
import { useState } from "react";
export default function SquareMakerUpgraded() {
  const [squares, setSquares] = useState([]);
  function add(color) {
    setSquares((prevSquares) => [...prevSquares, color]);
  }
  return (
    <>
      <h1>Square Maker Upgraded</h1>

      <Button handleClick={() => add("red")} color="red" text="add red" />
      <Button handleClick={() => add("blue")} color="blue" text="add blue" />
      <Button handleClick={() => setSquares([])} color="grey" text="reset" />

      <div className="square-container" style={{}}>
        {[...squares].map((square, i) => (
          <Square bg={square} key={i} />
        ))}
      </div>
    </>
  );
}
