import { Router } from "express";
const routerImagenes = Router(); 
//Necesitamos importamos el ImagenModel: 
import ImagenModel from "../model/imagen.model.js";

//Para poder eliminar las imagenes podemos usar: 
import {promises as fs} from "fs"; 


//Ruta raíz que muestra el muro con las imagenes: 

routerImagenes.get("/", async (req, res) => {
    const imagenes = await ImagenModel.find().lean(); 
    res.render("index", {imagenes})
})

//Ruta upload, para acceder al formulario de carga
routerImagenes.get("/upload", (req, res) => {
    res.render("upload"); 
})

//Ruta upload, para subir imagenes con multer: 

routerImagenes.post("/upload", async (req, res) => {
    try {
        const imagen = new ImagenModel(); 
        imagen.title = req.body.title; 
        imagen.description = req.body.description; 
        imagen.filename = req.file.filename; 
        imagen.path = "/img/" + req.file.filename;

        //Guardamos la nueva imagen en la base de datos: 
        await imagen.save(); 

        res.redirect("/"); 
    } catch (error) {
        res.status(500).send({mensaje: "Error terrible, se suspende el aumento de sueldo"}); 
    }
})

//Ruta para eliminar una imagen: 

routerImagenes.get("/image/:id/delete", async (req, res) => {
    let { id } = req.params; 
    const imagen = await ImagenModel.findByIdAndDelete(id);
    await fs.unlink("./src/public" + imagen.path); 
    res.redirect("/"); 
})

export default routerImagenes; 