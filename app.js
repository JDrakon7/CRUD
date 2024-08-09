import { letras} from "./letras.js";
import { numeros } from "./numeros.js";
import { correo } from "./correo.js";
import  valido from "./modulos.js";
import solicitud from "./nuevo.js";
import terminos from "./checkbox.js";

const $root = document.querySelector("#container")

  const $form = document.getElementById('form_usuario');
  const $nombre = document.getElementById('nombre');
  const $apellido = document.getElementById('apellido');
  const $documento = document.getElementById('documento');
  const $telefono = document.getElementById('telefono')
  const $tipodoc = document.getElementById('tipo-doc');
  const $correo = document.getElementById('Correo');
  const $direccion = document.getElementById('Direccion');
  const $btn = document.querySelector('button');
  const $terminos = document.getElementById('checkbox')
  const $template = document.getElementById("users").content
  
  
    
$nombre.addEventListener("keypress", (event)=>{
  letras(event , $nombre)
});
$apellido.addEventListener("keypress", (event)=>{
  letras(event , $apellido)
});

$documento.addEventListener("keypress",(event)=>{
   numeros(event , $documento)
});

$correo.addEventListener("keypress",(event)=>{
  correo(event , $correo)
})

$telefono.addEventListener("keypress",(event)=>{
  numeros(event , $telefono)
})


$form.addEventListener('submit', (event)=>{
  let response = valido(event , 'form [required]');
  alert(response);
  {

  }
})

const loadForm = (data) => { 
  const {
  id ,
  firs_name,
  last_name,
  phone,
  address,
  type_id,
  document,
  email,
} = data

user.value = id;
$nombre.value = firs_name;
$apellido.value = last_name;
$telefono.value = phone;
$direccion.address = address;
$tipodoc.value  = type_id;
$documento.value = document;
$correo.value = email;
$terminos.checked = true;
send.removeAttribute("disabled");
}

//////////////////////////////////Editar//////////////////////////////

const edit = (event , element) => {
  enviar(`users/${element.dataset.id}`, {
    method : "PATCH",
    headers: {
      "Content-type": "application/json; charset=UFT-8"
    },
  }).then((data) => {
    loadForm(data);
    toggledMOdal();
  });

}

const deleteData = (event , element) => {
  const tr = element.parentNode.parentNode.parenNode;

  if(confirm("¿Desea eliminar el registro?")) {
    enviar(`users/${element.dataset.id}`, {
    method: "DELETE"
  })
}



const validacion = (event) => {
  event.preventDefault();  
  const Elemento = document.querySelectorAll("form [required]");
  console.log(Elemento);
}

$form.addEventListener('input', () => {
const allFieldsFilled = Array.from($form.elements).every(input => {
  return input.type === 'checkbox' || input.value.trim() !== '';
});
checkbox.disabled = !allFieldsFilled;
});

$form.addEventListener("submit" , (event) => {
  event.preventDefault();
  let response = valido (event , "form [required]");
  //capturar atributos
  const data = {
      nombre: $nombre.value,
      apellido: $apellido.value,
      documento: $documento.value,
      'tipo-doc': $tipodoc.value,

      
      correo: $correo.value,
      direccion: $direccion.value,
      telefono: $telefono.value
  }
  if (response)
  console.log(data)
  fetch('http://localhost:3000/users' ,{

    method: 'POST',
    body:JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
   .then((response) => response.json)
   .then((json) => {
    console.log(json)
   })

  })



async function consulta() {
    const data = await fetch('http://127.0.0.1:3000/documents');
    const tipos = await data.json();

    const selec = document.getElementById('tipo-doc');

    tipos.forEach(element => {
      let option = document.createElement('option');
      option.value = element.id; 
      option.innerText = element.nombre;
      selec.appendChild(option);
    });
  }

  addEventListener('DOMContentLoaded', (event) => {
  const fragmento = document.createDocumentFragment();
  
   let variable = solicitud().then(data => {
    data.forEach(element => {
      let nombre = element.name;
      let id = element.id;
      let option = document.createElement('option');
      option.setAttribute('value' , id);
      option.textContent = nombre;
      fragmento.appendChild(option)
      
 
    });
    $tipodoc.appendChild(fragmento)
  });
    

   if (!$terminos.checked) {
      $btn.setAttribute('disabled' , "");
      }
   })



   const documentos = () => {
    const fragmento = document.createDocumentFragment();
    solicitud("documents")
     .then((data) => {  
        let option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.name;
        fragmento.appendChild(option);
     });
     tipo.appendChild(fragmento);
    }



  const listar = async  () => {
    const data = await solicitud("users");
    const documento = await solicitud("documents");

    data.forEach((element) => {
      let document = documentos.find((doc) => doc.id === element.type_id);
      $template.querySelector("tr").id = `user_${element.id}`;
      $template.querySelector(".firts_name").textContent = element.firs_name;
      $template.querySelector(".last_name").textContent = element.last_name;
      $template.querySelector(".phone").textContent = element.firs_name;
      $template.querySelector(".type_id").textContent = element.firs_name;
      $template.querySelector(".document").textContent = element.firs_name;
      $template.querySelector(".email").textContent = element.firs_name;
      $template.querySelector(".edit").setAttribute("data_id" , element.id);
      $template.querySelector(".delete").setAttribute("data_id" , element.id);
      
      let clone = document.importNode($template , true)

      fragmento.appendChild(clone)


    });
    table.querySelector("tbody").appendChild(fragmento);
  }


//Delegacion de ventos
// console.log(e.target):

document.addEventListener("click" , (e) => {
  let element = "";
  if (e.target.matches(".edit") || e.target.matches("edit *")){
    element = e.target.matches(".edit") ? e.target : e.target.parenNode;
    edit(e,element)
  }
  if (e.target.matches(".delete") || e.target.matches(".delete *")){

  }
});

  

  // $documento.addEventListener("submit",agregarpost)
  // $input.addEventListener("keypress", function (event) {
  //   if (event.key < "0" || event.key > "9") {
  //     event.preventDefault();
  //     alert("Error Solo se permiten numeros");
  //   }
  // });


// console.log(data)

// {
//   fetch('http://localhost:3000/users' ,{
//     method: 'POST',
//     body:JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((response) => response.json)
//   .then((json) => console.log(json))
// }

// let response = es_valido(event , "form [required]")
// const data = (() => {
//   event.preventDefault();

//     const new_usuario = {
//       nombre: $nombre.value,
//       apellido: $apellido.value,
//       documento: $documento.value,
//       'tipo-doc': $tipodoc.value,
//       correo: $correo.value,
//       direccion: $direccion.value
//     };

//     post(new_usuario)
//       .then(response => {
//         console.log('Usuario agregado:', response);
//         alert('Usuario agregado correctamente');

//         $formUsuario.reset();
//       })
    
//   })

