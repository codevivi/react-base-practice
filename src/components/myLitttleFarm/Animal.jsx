export default function Animal({ id, handleClick }) {
  console.log(id, typeof id);
  return (
    <span key={id} onClick={handleClick} className={id.startsWith("A") ? "avis" : "karve"}>
      {id}
    </span>
  );
}
