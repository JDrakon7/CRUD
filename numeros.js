export const numeros = (event , elemento) =>{
    console.log(event);
    let numeros = /^\d{0,10}$/; 
    let newValue = elemento.value + event.key;
  
    if (!numeros.test(newValue)){
      event.preventDefault()
    }
  };