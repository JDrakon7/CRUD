export const letras = (event, elemento) => {
    console.log(event);
    let letras = /^[a-zA-Zá-úÁ_U\s]+$/;
    if (letras.test(event.key)) {
        console.log("sí")      
    } else {
        event.preventDefault()
    }
  };
  