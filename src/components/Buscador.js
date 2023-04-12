import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarNota = (e) => {
    // Crear estado y actualizarlo
    setBusqueda(e.target.value);

    // Filtrar para buscar coincidencias
    let notas_encontradas = listadoState.filter((nota) => {
      return nota.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1 || notas_encontradas <= 0) {
      notas_encontradas = JSON.parse(localStorage.getItem("notas"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    // Actualizar estado del listado principal con lo que logrado filtar
    setListadoState(notas_encontradas);
  };
  return (
    <div className="search">
      {noEncontrado == true && busqueda.length > 1 && (
        <span className="no-encontrado">Note not found!</span>
      )}

      <form>
        <input
          type="text"
          placeholder="Search"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarNota}
        />
      </form>
    </div>
  );
};
