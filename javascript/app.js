let libros = JSON.parse(localStorage.getItem("listaLibros")) || [];
let formLibros = JSON.parse(localStorage.getItem("formulario")) || [];
localStorage.setItem("formulario", JSON.stringify(formLibros));


// obtener elementos del  HTML
const tituloInput = document.querySelector("#titulo");
const autorInput = document.querySelector("#autor");
const editorialInput = document.querySelector("#editorial");
const button = document.querySelector(".btn");
const listaLibros = document.querySelector("#lista-libros");
let nombreVariableFormulario = document.getElementById("book-form");

// agragar listener al formulario
nombreVariableFormulario.addEventListener("submit", (event)=>{
  event.preventDefault();

  // verifica si se agregaron datos en el campo
  if (tituloInput.value===""|| autorInput.value===""||editorialInput.value==="") {
   alert("ingrese datos en el campo")
  }else{

     //se crea un nuevo titulo
      const listaLibrosrow = document.createElement("tr");
      const  newtitulo = document.createElement("th");
       newtitulo.innerHTML= tituloInput.value;
     
     // se crea un nuevo autor
       listaLibrosrow.appendChild(newtitulo);
       const  newautor = document.createElement("th");
       newautor.innerHTML= autorInput.value;
       listaLibrosrow.appendChild(newautor);

     // se crea una nueva editorial
       const  neweditorial = document.createElement("th");
       neweditorial.innerHTML= editorialInput.value;
       listaLibrosrow.appendChild(neweditorial);
     // agregar una nueva fila a la tabla
       listaLibros.appendChild(listaLibrosrow);
     // limpiar campos del formulario
       tituloInput.value = "";
       autorInput.value = "";
       editorialInput.value = "";
  
  
  }
});
