import { useEffect, useState } from "react";
import { getPersonajes } from "./helpers/getPersonajes";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { VerPersonajes } from "./components/VerPersonajes";

function App() {
  const [personaje, setPersonajes] = useState();
  const [filterSpecies, setfilterSpecies] = useState("");
  const [modal, setModal] = useState(false);
  useEffect(() => {
    getPersonajes().then((res) => setPersonajes(res.results));
  }, []);

  const personajeFilter = () => {
    if (filterSpecies !== null && filterSpecies.length > 0) {
      return personaje.filter((per) =>
        per.species.toLowerCase().includes(filterSpecies.toLowerCase())
      );
    } else {
      return personaje;
    }
  };

  const abrirModal = () => {
    setModal(true);
  };

  return (
    <section>
      <Navbar />
      <div>
        <h1 className="Titulo">
          <b>Rick and Morty API</b>
        </h1>
        <h2 className="Titulo2">
          <b>Resumen de Personajes</b>
        </h2>
        <div>
          <input
            type="text" className="redondeado"
            placeholder="Busqueda por Species"
            onChange={(e) => setfilterSpecies(e.target.value)}
          />
        </div>
        <VerPersonajes
          personaje={personajeFilter()}
          abrirModal={abrirModal}
          modal={modal}
        />
        <div>
          <input
            type="text"
            placeholder="Busqueda por Species"
            onChange={(e) => setfilterSpecies(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
