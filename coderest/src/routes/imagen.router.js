import { Router } from "express";
const routerImagenes = Router(); 
//Necesitamos importamos el ImagenModel: 
import ImagenModel from "../model/imagen.model.js";


//Ruta raíz que muestra el muro con las imagenes: 

routerImagenes.get("/", async (req, res) => {
    const imagenes = await ImagenModel.find(); 
    res.render("index", {imagenes})
})

export default routerImagenes; 