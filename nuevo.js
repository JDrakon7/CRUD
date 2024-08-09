import { Url } from "./config.js";

const solicitud = async (url) => {
     let respuesta = await fetch(`${Url}${url}`);
     let datos = await respuesta.json();
     return datos

}
export default solicitud