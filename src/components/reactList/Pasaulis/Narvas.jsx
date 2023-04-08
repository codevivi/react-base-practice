import { GiCage } from "react-icons/gi";
import Daiktas from "../Tvenkinys/Daiktas";
export default function Narvas({ data }) {
  return (
    <div className="narvas">
      <h4>
        <GiCage style={{ fontSize: "1.5em" }} /> &nbsp; Narvas
      </h4>
      <ul>
        {data.map((item) => (
          <Daiktas item={item}></Daiktas>
        ))}
      </ul>
    </div>
  );
}
