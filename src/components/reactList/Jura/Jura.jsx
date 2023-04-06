import seaPlaners from "../seaPlaners";
import "./Jura.scss";
import Laivas from "./Laivas";
import Valtis from "./Valtis";
import Sala from "./Sala";
import Daiktas from "./Daiktas";

export default function Jura() {
  return (
    <>
      <h2>Jūra</h2>

      <div className="jura">
        <ul>{seaPlaners.map((item) => (item.type === "man" && <Valtis item={item} />) || (item.type === "car" && <Laivas item={item} />) || (item.type === "animal" && <Sala item={item} />) || <Daiktas styleClass="fish" item={item} />)}</ul>
      </div>
    </>
  );
}
