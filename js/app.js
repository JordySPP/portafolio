let variable = "Hola Mundo";
// let permite modificar el valor de la variable

const variable2 = "Hola Mundo";
// const no permite modificar el valor de la variable

var variable3 = "Hola Mundo";
// var backward compatibility deprecado



//JSON  Javascript Object Notation
const datosProyectos = [
  {
    nombre: "Proyecto 1",
    descripcion: "Elaboracion de una aplicacion de pc para el manejo de una tienda de celulares, con registro de empleados, productos, factura etc",
    fechaInicio: "2022-01-01",
    fechaFin: "2022-01-31",
    imgUrl: "https://via.placeholder.com/150",
    done: true,
  },
  {
    nombre: "Proyecto 2",
    descripcion: "Elaboracion de una app mobil, esta era un juego de tribia el cual permitia ver cuanto conocimiento tenemos en diferentes categorias, despues de fallar 3 preguntas mostraba la cantidad de puntos logrados y nosd dejaba guardar nuestra puntuacion",
    fechaInicio: "2023-07-01",
    fechaFin: "2023-07-31",
    imgUrl: "img/Trivia.png",
    done: true,
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Elaboracion de una app mobil donde mostraba ubicaciones de zonas verdes en siguatepeque, al igual que informacion de estos lugares",
    fechaInicio: "2023-10-05",
    fechaFin: "2023-10-15",
    imgUrl: "img/ecosigua.png",
    done: true,
  },
  {
    nombre: "Proyecto 4",
    descripcion: "Elaboracion de una pagina web de un restaurante de venta de pizza artesanal",
    fechaInicio: "2024-03-11",
    fechaFin: "2024-04-10",
    imgUrl: "img/pagina web.png",
    done: true,
  },
];

let myModal = null;
function page_load() {
  myModal = new ModalClass();
  populateProjects();
}

// funcion para carga sitios web al dom
function populateProjects() {
  const contendorSitiosWeb = document.getElementById("sitiosWebProjects");
  datosProyectos.forEach((proyecto) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (proyecto.done) {
      card.classList.add("done");
    }
    const img = document.createElement("img");
    img.src = proyecto.imgUrl;
    img.alt = "Imagen del Proyecto";
    const h4 = document.createElement("h4");
    h4.textContent = proyecto.nombre;
    h4.addEventListener("click", () => {
      myModal.showModal(proyecto.nombre, proyecto.descripcion);
    });
    const p = document.createElement("p");
    p.textContent = `${proyecto.descripcion} | ${proyecto.fechaInicio} - ${proyecto.fechaFin}`;

    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(p);

    contendorSitiosWeb.appendChild(card);
  });
}


//registrando una funcion para que se
// ejecute cuando este cargado todo el documento
document.addEventListener("DOMContentLoaded", page_load);