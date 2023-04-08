import { useState } from "react";
import Button from "../../Button/Button";
export default function PlusMinus() {
  const [num, setNum] = useState(0);
  function add1() {
    setNum((prevNum) => prevNum + 1);
  }

  function minus3() {
    setNum((prevNum) => prevNum - 3);
  }
  return (
    <>
      <h1>Plus Minus</h1>
      <div className="plus-minus" style={{ display: "inline-flex", alignItems: "center" }}>
        <Button handleClick={add1} color="green" text="plus" />
        <span style={{ fontSize: "2em" }}>{num}</span>
        <Button handleClick={minus3} color="red" text="minus" />
      </div>
    </>
  );
}
