export const correo = (event , elemento) =>{
    console.log(event);
    let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.test(elemento.value)) {
      console.log("si")
    }else{
      correo.preventDefault()
    }
  };
  