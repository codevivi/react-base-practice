import { useState } from "react";
import Button from "../Button/Button";
import "./Ganykla.scss";
import { rand7digits, randBetween } from "../../helpers/rand";
import Animal from "./Animal";
export default function Ganykla() {
  const [karves, setKarves] = useState(JSON.parse(localStorage.getItem("karves")) || []);
  const [avys, setAvys] = useState(JSON.parse(localStorage.getItem("avys")) || []);

  function initAnimals() {
    setAvys(
      save(
        "avys",
        [...Array(randBetween(5, 20))].map((_) => "A" + rand7digits())
      )
    );
    setKarves(
      save(
        "karves",
        [...Array(randBetween(5, 20))].map((_) => "K" + rand7digits())
      )
    );
  }
  function move(id, banda) {
    if (banda === "avys") {
      setAvys((animals) =>
        save(
          "avys",
          animals.filter((animal) => animal !== id)
        )
      );
      setKarves((animals) => save("karves", [...animals, id]));
      return;
    }
    setKarves((animals) =>
      save(
        "karves",
        animals.filter((animal) => animal !== id)
      )
    );
    setAvys((animals) => save("avys", [...animals, id]));
  }

  function save(animalName, animals) {
    localStorage.setItem(animalName, JSON.stringify(animals));
    return animals;
  }

  return (
    <>
      <h2>Ganykla</h2>
      <Button handleClick={initAnimals} text="į ganyklą" />
      <div className="ganykla">
        <div className="karves">
          <h3>Karvės</h3>
          {karves.map((animal) => (
            <Animal id={animal} handleClick={() => move(animal, "karves")} />
          ))}
        </div>
        <div className="avys">
          <h3>Avys</h3>
          {avys.map((animal) => (
            <Animal id={animal} handleClick={() => move(animal, "avys")} />
          ))}
        </div>
      </div>
    </>
  );
}
