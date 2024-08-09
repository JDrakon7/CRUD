export const password = (event , elemento) => {
    console.log(event);
    let password = /^[a-zA-Zá-úÁ_U\s]+$/
    if (password.test(event.key)){
      console.log("valido")
      
    }else {
      event.preventDefault()
    }
  }