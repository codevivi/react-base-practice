import dogs from "./dogs";
import "./dogs.scss";

export default function DogsLetterCount() {
  return (
    <ul className="dogs-list">
      {dogs.map((dog, i) => (
        <li style={{ color: dog.length > 6 ? "green" : "red" }} key={i}>
          {dog.length}
        </li>
      ))}
    </ul>
  );
}
