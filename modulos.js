const valido = (evento , form) =>{
  evento.preventDefault();
  const elementos = document.querySelectorAll(form)
  let alerta = true;
  elementos.forEach(element => {
    if (element.value === ""){
      element.classList.add('error')
      alerta = false
    }
  });
  return alerta;
  
}
export default valido