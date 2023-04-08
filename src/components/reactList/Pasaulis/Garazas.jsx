import { GiHomeGarage } from "react-icons/gi";
import Daiktas from "../Tvenkinys/Daiktas";
export default function Garazas({ data }) {
  return (
    <div className="garazas">
      <h4>
        <GiHomeGarage style={{ fontSize: "1.5em" }} />
        &nbsp; Garazas
      </h4>
      <ul>
        {data.map((item) => (
          <Daiktas item={item}></Daiktas>
        ))}
      </ul>
    </div>
  );
}
