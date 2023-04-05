import dogs from "./dogs";
import "./dogs.scss";
import Square from "./Square";

export default function DogsListSortedRounded() {
  return (
    <ul className="dogs-list">
      {[...dogs]
        .sort((a, b) => b.length - a.length)
        .map((dog, i) => (
          <li className="" key={i}>
            <strong>{i + 1}</strong>
            <Square word={dog} rounded={true} />
          </li>
        ))}
    </ul>
  );
}
