import MainTitle from "../../components/reactBase/MainTitle/MainTitle";
import TitleZebraiBebrai from "../../components/reactBase/TitleZebraiBebrai/TitleZebraiBebrai";
import TwoTitles from "../../components/reactBase/TwoTitles/TwoTitles";
import LabasZuiki from "../../components/reactBase/LabasZuiki/LabasZuiki";
import TwoColouredTitles from "../../components/reactBase/TwoColouredTitles/TwoColouredTitles";

export default function ReactBaseTasks() {
  return (
    <>
      <MainTitle text="React Base Užduotys" />
      <LabasZuiki />
      <TitleZebraiBebrai colorNum={1} />
      <TitleZebraiBebrai colorNum={2} />
      <TwoTitles text1="Bebrų ir zebrų sugyvenimo įpatybės" text2="Susitiko bebras ir zebras" />
      <TwoColouredTitles text1="Zebras spalvotas" text2="Bebras zebruotas" color="yellow" />
    </>
  );
}
