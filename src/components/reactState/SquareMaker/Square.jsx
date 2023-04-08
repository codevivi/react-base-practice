export default function Square({ bg }) {
  return <div style={{ width: "100px", height: "100px", backgroundColor: bg ? bg : "blue", margin: "1em" }}></div>;
}
