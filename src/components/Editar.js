import React from "react";

export const Editar = ({
  nota,
  conseguirNotas,
  setEditar,
  setListadoState,
}) => {
  const titulo_componente = "Edit note";

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const dateTimeString = `updated at: ${hours}:${minutes}:${seconds}`;

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    // Conseguir el target del evento
    let target = e.target;

    // Buscar el indice del objecto del array de notacula a actualizar
    const notas_almacenadas = conseguirNotas();
    const indice = notas_almacenadas.findIndex((nota) => nota.id === id);

    // Crear objecto con el id de ese indice, con titulo y descripcion del formulario
    let nota_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
      fecha: dateTimeString,
    };

    // Actualizar el elemento con ese indice
    notas_almacenadas[indice] = nota_actualizada;

    // Guardar en el localStorage el nuevo array de objetos actualizados
    localStorage.setItem("notas", JSON.stringify(notas_almacenadas));

    // Actualizar estados
    setListadoState(notas_almacenadas);
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>

      <form onSubmit={(e) => guardarEdicion(e, nota.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={nota.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={nota.descripcion}
          className="descripcion_editada"
        />

        <input type="submit" className="editar" value="Save" />
      </form>
    </div>
  );
};
