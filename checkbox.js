
const terminos = ("change", (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "");
    }
  });

  export default terminos