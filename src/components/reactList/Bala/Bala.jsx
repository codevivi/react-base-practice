import seaPlaners from "../seaPlaners";
import "./Bala.scss";
export default function Bala() {
  return (
    <>
      <h2>Bala</h2>
      <ul className="bala">
        {seaPlaners.map((item) => (
          <li key={item.id}>
            id: {item.id}, type: {item.type}, name: <span style={{ color: item.color }}>{item.name}</span>, color: {item.color}
          </li>
        ))}
      </ul>
    </>
  );
}
