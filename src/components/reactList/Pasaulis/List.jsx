import Namas from "./Namas";
import Garazas from "./Garazas";
import Narvas from "./Narvas";
import Akvariumas from "./Akvariumas";
export default function List({ data, title }) {
  return (
    <div className="parts">
      <h3>{title}</h3>
      <div>
        <Namas data={data.filter((item) => item.type === "man")}></Namas>
        <Garazas data={data.filter((item) => item.type === "car")}></Garazas>
        <Narvas data={data.filter((item) => item.type === "animal")}></Narvas>
        <Akvariumas data={data.filter((item) => item.type === "fish")}></Akvariumas>
      </div>
    </div>
  );
}
