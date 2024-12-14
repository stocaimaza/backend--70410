import { Router } from "express";
const router = Router(); 

//Array para almacenar usuarios
const usuarios = []; 

//Ruta que me retorna todo el listado de usuarios: 

router.get("/", (req, res) => {
    res.send(usuarios); 
})

router.post("/", (req, res) => {
    const nuevoUsuario = req.body; 
    usuarios.push(nuevoUsuario); 
    res.send({status: "success", mensaje: "Usuario creado correctamente"}); 
})

export default router; 