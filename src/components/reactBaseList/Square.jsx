export default function Square({ word, rounded }) {
  console.log(rounded);
  return <span style={{ width: word.length + 1 + "em", height: word.length + 1 + "em", borderRadius: rounded ? "50%" : null }}>{word}</span>;
}
