import { GiAquarium } from "react-icons/gi";
import Daiktas from "../Tvenkinys/Daiktas";
export default function Akvariumas({ data }) {
  return (
    <div className="akvariumas">
      <h4>
        <GiAquarium style={{ fontSize: "1.5em" }} /> &nbsp; Akvariumas
      </h4>
      <ul>
        {data.map((item) => (
          <Daiktas item={item}></Daiktas>
        ))}
      </ul>
    </div>
  );
}
