import Daiktas from "../Tvenkinys/Daiktas";
export default function Vardas({ seaPlaners }) {
  return (
    <>
      <h3>Vardas</h3>
      <ul>
        {[...seaPlaners]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => (
            <Daiktas item={item} />
          ))}
      </ul>
    </>
  );
}
