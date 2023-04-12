import { useState } from "react";
import "./ReactForms3.scss";

export default function ReactForms3() {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(50);

  return (
    <div className="react-forms-3">
      <h2>Užduotis #3</h2>
      <p>Santykis tartp skaičių visada lygus 2</p>
      <input onChange={(e) => setNum1(e.target.value) || setNum2(e.target.value / 2)} type="number" value={num1} />
      <input onChange={(e) => setNum2(e.target.value) || setNum1(e.target.value * 2)} name="num2" value={num2} type="number" />
    </div>
  );
}
