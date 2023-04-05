export default function TwoColouredTitles({ text1, text2, color }) {
  return (
    <>
      <h1 style={{ color: color }}>{text1}</h1>
      <h2 style={{ color: color }}>{text2}</h2>
    </>
  );
}
