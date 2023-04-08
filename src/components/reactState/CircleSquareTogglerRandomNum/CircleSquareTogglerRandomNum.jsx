import { useState } from "react";
import { randBetween } from "../../../helpers/rand.js";
import "../CircleSquareToggler/CircleSquareToggler.scss";
import Button from "../../Button/Button";
export default function CircleSquareTogglerRandomNum() {
  const [isCircle, setIsCircle] = useState(true);
  const [content, setContent] = useState(randBetween(5, 25));

  return (
    <>
      <h1>Circle Square Toggler with random number</h1>
      <div className="circle-square">
        <div className={`circle ${isCircle ? "" : "squared"} `}>{content}</div>
        <Button color="orange" text="Change" handleClick={() => setIsCircle((prev) => !prev)} />
        <Button color="green" text="Random" handleClick={() => setContent(randBetween(5, 25))} />
      </div>
    </>
  );
}
