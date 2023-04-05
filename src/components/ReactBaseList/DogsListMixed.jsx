import dogs from "./dogs";
import "./dogs.scss";
import Square from "./Square";

export default function DogsListMixed() {
  return (
    <ul className="dogs-list">
      {dogs.map((dog, i) => (
        <li className="" key={i}>
          <Square word={dog} rounded={i % 2 ? true : false} />
        </li>
      ))}
    </ul>
  );
}
