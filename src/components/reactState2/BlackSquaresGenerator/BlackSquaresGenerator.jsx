import { useState } from "react";
import Button from "../../Button/Button";
import uniqid from "uniqid";
import Square from "./Square";
import "./BlackSquaresGenerator.scss";

export default function BlackSquaresGenerator() {
  const [squares, setSquares] = useState(new Map());

  function addSquare(id) {
    setSquares((squares) => new Map(squares).set(id, 0));
  }

  function increaseSquare(id) {
    setSquares((squares) => new Map(squares).set(id, squares.get(id) + 1));
  }

  return (
    <>
      <h2>Juodų kvadratų generatrorius</h2>
      <Button handleClick={() => addSquare(uniqid())} text="pridėti" />
      <div className="squares">
        {[...squares].map((square) => (
          <Square key={square[0]} handleClick={() => increaseSquare(square[0])} number={square[1]} />
        ))}
      </div>
    </>
  );
}
