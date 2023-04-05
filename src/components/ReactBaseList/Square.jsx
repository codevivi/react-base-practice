export default function Square({ word }) {
  return (
    <span className="square" style={{ width: word.length + 1 + "em", height: word.length + 1 + "em" }}>
      {word}
    </span>
  );
}
