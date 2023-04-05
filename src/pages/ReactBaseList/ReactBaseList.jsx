import DogsList from "../../components/ReactBaseList/DogsList";
import DogsListFiltered from "../../components/ReactBaseList/DogsListFiltered";
import DogsListMixed from "../../components/ReactBaseList/DogsListMixed";
import DogsListSortedRounded from "../../components/ReactBaseList/DogsListSortedRounded";
import MainTitle from "../../components/reactBase/MainTitle/MainTitle";

export default function ReactBaseList() {
  return (
    <>
      <MainTitle text="React Base List" />
      <DogsList />
      <DogsListSortedRounded />
      <DogsListMixed />
      <DogsListFiltered />
    </>
  );
}
