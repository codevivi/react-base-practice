import DogsLetterCount from "../components/reactBaseList/DogLetterCount";
import DogsList from "../components/reactBaseList/DogsList";
import DogsListFiltered from "../components/reactBaseList/DogsListFiltered";
import DogsListMixed from "../components/reactBaseList/DogsListMixed";
import DogsListSortedRounded from "../components/reactBaseList/DogsListSortedRounded";
import MainTitle from "../components/reactBase/MainTitle/MainTitle";

export default function ReactBaseList() {
  return (
    <>
      <MainTitle text="React Base List" />
      <DogsList />
      <DogsListSortedRounded />
      <DogsListMixed />
      <DogsListFiltered />
      <DogsLetterCount />
    </>
  );
}
