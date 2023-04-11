import { GiCat } from "react-icons/gi/";
export default function Katinukas({ catData }) {
  return (
    <div className="katinukas">
      <GiCat />
      <span> {catData.name} </span>
      <span>{catData.weight}g</span>
    </div>
  );
}
