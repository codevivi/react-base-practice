export default function Square({ handleClick, number }) {
  return (
    <div className="square">
      <span>{number}</span>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
