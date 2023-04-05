import DogsList from "../../components/ReactBaseList/DogsList";
import DogsListSortedRounded from "../../components/ReactBaseList/DogsListSortedRounded";
import MainTitle from "../../components/reactBase/MainTitle/MainTitle";

export default function ReactBaseList() {
  return (
    <>
      <MainTitle text="React Base List" />
      <DogsList />
      <DogsListSortedRounded />
    </>
  );
}
