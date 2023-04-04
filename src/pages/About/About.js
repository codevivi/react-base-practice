import MainTitle from "../../components/reactBase/MainTitle/MainTitle";
import "./About.scss";
export default function About() {
  return (
    <div className="about-page">
      <MainTitle text="Užduočių aprašymai" />
      <h2>REACT BASE</h2>

      <ol>
        <li>Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.</li>
        <li>Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.</li>
        <li>Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.</li>
        <li>Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.</li>
        <li>Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.</li>
      </ol>
    </div>
  );
}
