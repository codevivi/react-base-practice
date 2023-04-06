import "./Tvenkinys.scss";
import seaPlaners from "../seaPlaners";
import Daiktas from "./Daiktas";
export default function Tvenkinys() {
  return (
    <>
      <h2>Tvenkinys</h2>
      <div className="tvenkinys">
        <h3>Poriniai id</h3>
        <ul>
          {[...seaPlaners]
            .filter((item) => !(item.id % 2))
            .map((item) => (
              <Daiktas item={item} />
            ))}
        </ul>
        <h3>Neporiniai id</h3>
        <ul>
          {[...seaPlaners]
            .filter((item) => item.id % 2)
            .map((item) => (
              <Daiktas item={item} />
            ))}
        </ul>
      </div>
    </>
  );
}
