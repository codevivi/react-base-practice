import MainTitle from "../components/reactBase/MainTitle/MainTitle";
import Bala from "../components/reactList/Bala/Bala";
import Jura from "../components/reactList/Jura/Jura";
import Pasaulis from "../components/reactList/Pasaulis/Pasaulis";
import Tvenkinys from "../components/reactList/Tvenkinys/Tvenkinys";
import Vandenynas from "../components/reactList/Vandenynas/Vandenynas";

export default function ReactList() {
  return (
    <>
      <MainTitle text="React List" />
      <Bala />
      <Tvenkinys />
      <Jura />
      <Vandenynas />
      <Pasaulis />
    </>
  );
}
