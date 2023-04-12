import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>My Sticky Notes App</h1>
      </header>

      {/*Contenido principal*/}
      <section id="content" className="content">

        {/*aqui van el listado de notas*/}
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>

      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState} />

        <Crear setListadoState={setListadoState}/>

      </aside>
    </div>
  );
}

export default App;
