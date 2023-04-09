import MainTitle from "../components/reactBase/MainTitle/MainTitle";
import BlackSquaresGenerator from "../components/reactState2/BlackSquaresGenerator/BlackSquaresGenerator";
import Laukas from "../components/reactState2/Laukas/Laukas";
import PreserveIncrease from "../components/reactState2/PreserveIncrease/PreserveIncrease";

export default function ReactState2() {
  return (
    <>
      <MainTitle text="React state #2" />
      <Laukas />
      <BlackSquaresGenerator />
      <PreserveIncrease />
    </>
  );
}
