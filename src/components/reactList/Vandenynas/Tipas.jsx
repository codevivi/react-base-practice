import Daiktas from "../Tvenkinys/Daiktas";
export default function Tipas({ seaPlaners }) {
  return (
    <>
      <h3>Tipas</h3>
      <ul>
        {[...seaPlaners]
          .sort((a, b) => a.type.localeCompare(b.type))
          .map((item) => (
            <Daiktas item={item} />
          ))}
      </ul>
    </>
  );
}
