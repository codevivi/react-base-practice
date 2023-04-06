import Daiktas from "../Tvenkinys/Daiktas";
export default function Spalva({ seaPlaners }) {
  return (
    <>
      <h3>Spalva</h3>
      <ul>
        {[...seaPlaners]
          .sort((a, b) => a.color.localeCompare(b.color))
          .map((item) => (
            <Daiktas item={item} />
          ))}
      </ul>
    </>
  );
}
