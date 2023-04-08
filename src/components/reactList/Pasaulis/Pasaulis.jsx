import seaPlaners from "../seaPlaners";
import "./Pasaulis.scss";
import List from "./List";
export default function Pasaulis() {
  return (
    <>
      <h2>Pasaulis</h2>
      <div className="pasaulis">
        <List data={seaPlaners.filter((item) => !(item.id % 2))} title="Poriniai"></List>
        <List data={seaPlaners.filter((item) => item.id % 2)} title="Neporiniai"></List>
      </div>
    </>
  );
}
