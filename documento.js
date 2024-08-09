import valido from "./modulos.js";
import solicitud from "./nuevo.js";

const $form = document.querySelector("form")
const nombre = document.querySelector("#nombre")


$form.addEventListener("submit", (event) => {
    event.preventDefault();
    let response = valido(event , "form [required]")
    const data={
        name: nombre.value,
    }

    if(response){
        fetch('http://localhost:3000/documents',{
            method: 'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type': 'application/json',
              },
        })
    }
});


