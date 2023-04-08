import dogs from "./dogs";
import "./dogs.scss";

export default function DogsListFiltered() {
  return <ul className="dogs-list">{dogs.map((dog, i) => (dog[0].toUpperCase() !== dog[0] ? <li key={i}>{dog}</li> : null))}</ul>;
}
