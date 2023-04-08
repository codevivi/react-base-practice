import "./Button.scss";
export default function Button({ handleClick, text, color }) {
  return (
    <button onClick={handleClick} className={`button ${color} ? ${color} : null`}>
      {text}
    </button>
  );
}
