import seaPlaners from "../seaPlaners";
import "./Vandenynas.scss";
import Tipas from "./Tipas";
import Vardas from "./Vardas";
import Spalva from "./Spalva";
export default function Vandenynas() {
  return (
    <>
      <h1>Vandenynas</h1>
      <div className="vandenynas">
        <Tipas seaPlaners={seaPlaners} />
        <Vardas seaPlaners={seaPlaners} />
        <Spalva seaPlaners={seaPlaners} />
      </div>
    </>
  );
}
