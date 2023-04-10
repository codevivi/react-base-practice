import MainTitle from "../../components/reactBase/MainTitle/MainTitle";
import "./About.scss";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { useState } from "react";
export default function About() {
  const [showBase, setShowBase] = useState(false);
  const [showBaseList, setShowBaseList] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showState2, setShowState2] = useState(false);
  const [showState3, setShowState3] = useState(false);

  return (
    <div className="about-page">
      <MainTitle text="Užduočių aprašymai" />
      <section>
        <div className="expand-title">
          <h2>REACT BASE </h2>
          <button onClick={() => setShowBase((prev) => !prev)} className="expand-btn">
            {showBase ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
          </button>
        </div>
        {showBase && (
          <ol>
            <li>Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.</li>
            <li>Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.</li>
            <li>Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.</li>
            <li>Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.</li>
            <li>Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.</li>
          </ol>
        )}
      </section>
      <section>
        <div className="expand-title">
          <h2>REACT BASE LIST</h2>
          <button onClick={() => setShowBaseList((prev) => !prev)} className="expand-btn">
            {showBaseList ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
          </button>
        </div>
        {showBaseList && (
          <ol>
            <li>Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.</li>
            <li>Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.</li>
            <li>Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime.</li>
            <li>Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).</li>
            <li>Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.</li>
          </ol>
        )}
      </section>
      <section>
        <div className="expand-title">
          <h2>REACT LIST </h2>
          <button onClick={() => setShowList((prev) => !prev)} className="expand-btn">
            {showList ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
          </button>
        </div>
        {showList && (
          <>
            <p>Kiekviename uždavinyje galima susikurti kiek reikia papildomų komponentų. Visuose uždaviniuose name savybę reikia nudažyti spalva, kuri yra color savybėje.</p>
            <ol>
              <li>Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners.</li>
              <li>Sukurti du komponentus Tvenkinys, Daiktas - tėvinį ir vaikinį atitinkamai. Tvenkinys komponente du kartus panaudokite komponentą Daiktas atvaizduoti masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams (pagal id, ne masyvo indeksą).</li>
              <li>Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas, kiti trys vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis, “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento).</li>
              <li>Sukurti keturis komponentus Vandenynas, Tipas, Vardas, Spalva. Vandenynas tėvinis komponentas kiti trys vaikiniai. Vaikiniuose komponentuose atvaizduoti tą patį masyvą, tik išrūšiuotą pagal komponento vardą (pvz Tipas išrūšiuota pagal tipą ir t.t.).</li>
              <li>
                Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis tėvinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Namas, “car” - Garazas, “animal” - Narvas, “fish” - Akvariumas. Komponentas Pasaulis turi būti
                padalintas į dvi dalis- porinę ir neporinę (pagal id, ne masyvo indeksą). Visus keturis vaikinius komponentus panaudoti po du kartus - porinėje ir neporinėje dalyje, atvaizduojant porinius ir neporinius masyvo įrašus.
              </li>
            </ol>
          </>
        )}
      </section>
      <section>
        <div className="expand-title">
          <h2>REACT STATE </h2>
          <button onClick={() => setShowState((prev) => !prev)} className="expand-btn">
            {showState ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
          </button>
        </div>
        {showState && (
          <ol>
            <li>Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.</li>
            <li>Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25</li>
            <li>Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3</li>
            <li>Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus dar kartą- dar vienas ir t.t.</li>
            <li>Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina</li>
          </ol>
        )}
      </section>
      <section>
        <div className="expand-title">
          <h2>REACT STATE #2 </h2>
          <button onClick={() => setShowState2((prev) => !prev)} className="expand-btn">
            {showState2 ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
          </button>
        </div>
        {showState2 && (
          <ol>
            <li>
              Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai
              žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.
            </li>
            <li>
              Sukurti aplikaciją su vienu mygtuku “pridėti”. Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje. Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus 3 - atsirastų 3 ir t.t. Spaudant mygtuką “+” kiekviename iš juodų
              kvadratų jų viduje esantis skaičius didėtų vienetu (kiekviename kvadrate atskirai).
            </li>
            <li>Sukurti aplikaciją su vienu mygtuku “+” ir pradiniu skaičiumi 0. Paspaudus mygtuką skaičius didėtų vienetu. Panaudoti localStorage ir padaryti taip, kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0, o nuo prieš tai buvusio skaičiaus</li>
          </ol>
        )}
      </section>
      <section>
        <div className="expand-title">
          <h2>MyLittleFarm </h2>
          <button onClick={() => setShowState3((prev) => !prev)} className="expand-btn">
            {showState3 ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
          </button>
        </div>
        {showState3 && (
          <ol>
            <li>
              <p>
                Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys ir Karvės. Sukurti mygtuką “į ganyklą”, kurį paspaudus dešinė pusė būtų apgyvendinta avimis, kurias vaizduoja apskritimai, o kairė pusė karvėmis, kurias vaizduoja keturkampiai. Avių ir karvių skaičius rand 5 - 20.
                Kiekvieno gyvulio viduje yra random identifikacinis numeris: pvz avim A0254787, karvėm K0007898, kur skaičius yra septynženklis rand skaičius. Perkrovus puslapį avių ir karvių skaičius ir jų identifikaciniai numeriai turi nekisti (tik patį pirmą kartą “Ganykla” turi būti tuščia).
                Paspaudus ant avies arba karvės ji turi perbėgti į priešingą ganyklos pusę (antrą kartą paspaudus grįžti atgal). Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.
              </p>
              <p>Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi. Nemutuojam! Perbėgusios avys ir karvės yra dedamos į bandos galą.</p>
            </li>
          </ol>
        )}
      </section>
    </div>
  );
}
