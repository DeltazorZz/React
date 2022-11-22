import "./App.css";
import Konyv from "./Konyv.js";

const konyvtomb = [
  {
    cim: "RézÁgyúk",
    szerzo: "Gabor Áron",
    ar: 345654,
  },
  {
    cim: "AnDor",
    szerzo: "Anda József",
    ar: 11111,
  },
  {
    cim: "Da Vinci Rejtély",
    szerzo: "Arteus Terus",
    ar: 11111,
  },
  {
    cim: "Today is a good day",
    szerzo: "Optimistic Men",
    ar: 11111,
  },
];

function App() {
  function kosarkezelesfv(adat){
    console.log(adat);
  }
  return (
    <main>
      <div className="App">
        <header className="App-header">
          <h1>KönyvÁruház</h1>
        </header>
        <article>
          {
            konyvtomb.map((konyv, index)=>{
              return(<Konyv konyvObj={konyvtomb[konyv]} key={index}/>)
            }
            )
          }
        </article>
        <footer>
          <p>Vetési György Ádám</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
