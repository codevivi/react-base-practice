import seaPlaners from "../seaPlaners";
import "./Jura.scss";
import Laivas from "./Laivas";
import Valtis from "./Valtis";
import Sala from "./Sala";

export default function Jura() {
  return (
    <>
      <h2>Jūra</h2>

      <div className="jura">
        <ul>
          {seaPlaners.map(
            (item) =>
              (item.type === "man" && <Valtis item={item} />) ||
              (item.type === "car" && <Laivas item={item} />) ||
              (item.type === "animal" && <Sala item={item} />) || (
                <li key={item.id} className="fish">
                  <span style={{ color: item.color }}>{item.name}</span>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
}
