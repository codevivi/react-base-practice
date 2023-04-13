import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Ganykla.scss";
import { rand7digits, randBetween } from "../../helpers/rand";
import Animal from "./Animal";
export default function Ganykla() {
  const [karves, setKarves] = useState(null);
  const [avys, setAvys] = useState(null);

  useEffect(() => {
    setKarves(JSON.parse(localStorage?.getItem("karves")) || []);
    setAvys(JSON.parse(localStorage?.getItem("avys")) || []);
  }, []);

  useEffect(() => {
    if (null === karves) {
      return;
    }
    localStorage.setItem("karves", JSON.stringify(karves));
  }, [karves]);

  useEffect(() => {
    if (null === avys) {
      return;
    }
    localStorage.setItem("avys", JSON.stringify(avys));
  }, [avys]);

  function initAnimals() {
    setAvys([...Array(randBetween(5, 20))].map((_) => "A" + rand7digits()));
    setKarves([...Array(randBetween(5, 20))].map((_) => "K" + rand7digits()));
  }

  function move(id, banda) {
    if (banda === "avys") {
      setAvys((animals) => animals.filter((animal) => animal !== id));
      setKarves((animals) => [...animals, id]);
      return;
    }
    setKarves((animals) => animals.filter((animal) => animal !== id));
    setAvys((animals) => [...animals, id]);
  }

  return (
    <>
      <h2>Ganykla</h2>
      <Button handleClick={initAnimals} text="į ganyklą" />
      <div className="ganykla">
        <div className="karves">
          <h3>Karvės</h3>
          {karves?.map((animal) => (
            <Animal id={animal} handleClick={() => move(animal, "karves")} />
          ))}
        </div>
        <div className="avys">
          <h3>Avys</h3>
          {avys?.map((animal) => (
            <Animal id={animal} handleClick={() => move(animal, "avys")} />
          ))}
        </div>
      </div>
    </>
  );
}
