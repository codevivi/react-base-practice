import "./Button.scss";
export default function Button({ handleClick, text, color, long }) {
  return (
    <button onClick={handleClick} className={`button ${long && "long"} ${color} ? ${color} : null`}>
      {text}
    </button>
  );
}
