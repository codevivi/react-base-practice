export default function TitleZebraiBebrai({ colorNum }) {
  colorNum = Number(colorNum);
  let validColors = ["blue", "red"];
  let color = validColors[colorNum - 1];

  return <h1 style={{ color: color ? color : null }}>Zebrai ir Bebrai</h1>;
}
