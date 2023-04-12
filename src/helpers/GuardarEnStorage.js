export const GuardarEnStorage = (clave, elemento) => {

    // Conseguir los elementos que ya tenemos en localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Comprobart si es un array
    if(Array.isArray(elementos)) {
        // Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    } else {
        elementos = [elemento];
    }
    // Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver objeto guardado
    return elemento;
}