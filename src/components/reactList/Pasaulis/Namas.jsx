import { GiFamilyHouse } from "react-icons/gi";
import Daiktas from "../Tvenkinys/Daiktas";
export default function Namas({ data }) {
  return (
    <div className="namas">
      <h4>
        <GiFamilyHouse style={{ fontSize: "1.5em" }} /> &nbsp; Namas
      </h4>
      <ul>
        {data.map((item) => (
          <Daiktas item={item}></Daiktas>
        ))}
      </ul>
    </div>
  );
}
