import { useState } from "react";
import Button from "../../Button/Button";
import "./ReactForms1.scss";
import { randBetween } from "../../../helpers/rand";

export default function ReactForms1() {
  const [squares, setSquares] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    setSquares((squares) => [...squares, ...[...Array(Number(formData.count))].map(() => randBetween(100, 200).toString())]);
  }
  return (
    <>
      <h2>Užduotis #1</h2>
      <form className="reactForm1" onSubmit={handleSubmit}>
        <label htmlFor="count">Įveskite kiek kvadratėlių norite pridėti</label>
        <input id="count" required min="1" max="10000" name="count" type="number" />
        <Button type="submit" text="Pridėti" />
      </form>

      <div className="squaresReactForm1">
        {squares.map((square, ind) => (
          <span key={ind + square} style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
            {square}
          </span>
        ))}
      </div>
    </>
  );
}
