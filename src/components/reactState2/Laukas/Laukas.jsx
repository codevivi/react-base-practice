import Button from "../../Button/Button";
import "./Laukas.scss";
import { useState } from "react";

export default function Laukas() {
  const treeNames = ["ąžuolas", "beržas", "uosis"];
  const [trees, setTrees] = useState([]);

  function addTree(tree) {
    setTrees((trees) => [...trees, tree]);
  }

  return (
    <>
      <h2>Laukas</h2>
      <div className="laukas">
        <div className="buttons-container">
          {treeNames.map((name, ind) => (
            <Button handleClick={() => addTree(name)} color="green" long={true} text={name} key={ind} />
          ))}
        </div>
        <div className="parts">
          {treeNames.map((name, ind) => (
            <div key={ind}>
              {" "}
              {trees
                .filter((tree) => tree === name)
                .map((tree, ind) => (
                  <span key={ind}>{name}</span>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
