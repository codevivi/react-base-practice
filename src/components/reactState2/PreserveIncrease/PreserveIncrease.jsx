import { useState } from "react";
import Square from "../BlackSquaresGenerator/Square";
export default function PreserveIncrease() {
  const [number, setNumber] = useState(Number(localStorage.getItem("number")) || 0);

  function increase() {
    setNumber((num) => localStorage.setItem("number", num + 1) || num + 1);
  }

  return (
    <>
      <h2>Padidink ir išsaugok</h2>
      <Square handleClick={increase} number={number} />
    </>
  );
}
