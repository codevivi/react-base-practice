import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./ReactForms2.scss";
import uniqid from "uniqid";
import Katinukas from "./Katinukas";

export default function ReactForms2() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    setCats(JSON.parse(localStorage?.getItem("cats")) || []);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    setCats((cats) => save("cats", [...cats, { id: uniqid(), name: formData.name, weight: formData.weight }]));
  }
  function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  }
  return (
    <>
      <h2>Užduotis #2</h2>
      <form className="reactForm2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Katinuko vardas: </label>
          <input id="name" name="name" required type="text" />
        </div>
        <div>
          <label htmlFor="weight">Katinuko svoris gramais: </label>
          <input id="weight" name="weight" required type="number" min="100" step="50" max="5000" />
        </div>
        <Button text="Pridėti katinuką" />
      </form>
      <div className="katinukai">
        {[...cats]
          .sort((a, b) => b.weight - a.weight)
          .map((cat) => (
            <Katinukas catData={cat} />
          ))}
        <p>
          Bendras katinukų svoris: <span>{cats.reduce((acc, curr) => acc + Number(curr.weight), 0) / 1000 + "kg"}</span>
        </p>
      </div>
    </>
  );
}
