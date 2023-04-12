import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    conseguirNotas();
  }, []);

  const conseguirNotas = () => {
    let notas = JSON.parse(localStorage.getItem("notas"));

    setListadoState(notas);

    return notas;
  };

  const borrarNota = (id) => {
    // Conseguir notas almacenadas
    let notas_almacenadas = conseguirNotas();

    // Filtrar esas notas para que elimine del array la que no quiero
    let nuevo_array_notas = notas_almacenadas.filter(
      (nota) => nota.id !== parseInt(id)
    );

    // Actualizar estafo del listado
    setListadoState(nuevo_array_notas);

    // Actualizar los datos en el localStorage
    localStorage.setItem("notas", JSON.stringify(nuevo_array_notas));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((nota) => {
          return (
            <article key={nota.id} className="post-it">
              <h3 className="title">{nota.titulo}</h3>
              <hr/>
              <p className="description">{nota.descripcion}</p>

              <button className="edit" onClick={() => setEditar(nota.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => borrarNota(nota.id)}>
                Delete
              </button>
              <br/>
              <p className="time-note">{nota.fecha}</p>

              {/* aparece formulario de editar */}
              {editar === nota.id && (
                <Editar
                  nota={nota}
                  conseguirNotas={conseguirNotas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No notes to show</h2>
      )}
    </>
  );
};
