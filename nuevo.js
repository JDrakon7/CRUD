import { URL } from "./config.js";

const solicitar = async (fianal) => {
     let respuesta = await fetch(`${URL}/${final}`);
     let datos = await respuesta.json();
     return datos

}
export default solicitar