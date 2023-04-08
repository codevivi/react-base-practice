import MainTitle from "../components/reactBase/MainTitle/MainTitle";
import CircleSquareToggler from "../components/reactState/CircleSquareToggler/CircleSquareToggler";
import CircleSquareTogglerRandomNum from "../components/reactState/CircleSquareTogglerRandomNum/CircleSquareTogglerRandomNum";
import PlusMinus from "../components/reactState/PlusMinus/PlusMinus";
import SquareMaker from "../components/reactState/SquareMaker/SquareMaker";
import SquareMakerUpgraded from "../components/reactState/SquareMakerUpgraded/SquareMakerUpgraded";

export default function ReactList() {
  return (
    <>
      <MainTitle text="React State" />
      <CircleSquareToggler />
      <CircleSquareTogglerRandomNum />
      <PlusMinus />
      <SquareMaker />
      <SquareMakerUpgraded />
    </>
  );
}
