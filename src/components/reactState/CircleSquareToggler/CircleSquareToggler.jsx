import { useState } from "react";
import "./CircleSquareToggler.scss";
import Button from "../../Button/Button";
export default function CircleSquareToggler() {
  const [isCircle, setIsCircle] = useState(true);

  return (
    <>
      <h1>Circle Square Toggler</h1>
      <div className="circle-square">
        <div className={`circle ${isCircle ? "" : "squared"} `}></div>
        <Button color="orange" text="Change" handleClick={() => setIsCircle((prev) => !prev)} />
      </div>
    </>
  );
}
