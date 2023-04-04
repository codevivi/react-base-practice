import dogs from "../dogs";
import "./SquareDogs.scss";

function Dog({ dog }) {
  return (
    <span className="dog" style={{ width: dog.length + 1 + "em", height: dog.length + 1 + "em" }}>
      {dog}
    </span>
  );
}

export default function SquareDogs() {
  return (
    <ul className="dogs-list">
      {dogs.map((dog, i) => (
        <li className="square" key={i}>
          <Dog dog={dog} />
        </li>
      ))}
    </ul>
  );
}
