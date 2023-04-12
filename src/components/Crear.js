import React, { useRef, useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
  const formRef = useRef();

  const tituloComponente = "Add Note";

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const dateTimeString = `created at: ${hours}:${minutes}:${seconds}`;

  const [notaState, setNotaState] = useState({
    titulo: " ",
    descripcion: " ",
  });

  const { titulo, descripcion } = notaState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    const form = formRef.current;

    // Conseguir Datos formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    if (!titulo || !descripcion) {
        alert("Please fill requiered fields!");
        return;
    }

    if(form.checkValidity()) {
        form.reset();
    } else {
        alert("Please fill requiered fields!");
    }

    // Crear objeto de la nota a guardar
    let nota = {
      id: new Date().getTime(),
      titulo,
      descripcion,
      fecha: dateTimeString,
    };

    // Guardar estado
    setNotaState(nota);

    // Actualizar el estado de listado principal

    setListadoState((elementos) => {
      return [...elementos, nota];
    });

    //Guardar en el almacenamiento local
    GuardarEnStorage("notas", nota);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      {titulo && descripcion && "New Note created: " + titulo}

      <form ref={formRef} onSubmit={conseguirDatosForm}>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Title"
          autocomplete="off"
        />

        <textarea
          id="description"
          name="descripcion"
          placeholder="Description"
          autocomplete="off"
        ></textarea>

        <input className="submit" type="submit" id="save" value="+" />
      </form>
    </div>
  );
};
