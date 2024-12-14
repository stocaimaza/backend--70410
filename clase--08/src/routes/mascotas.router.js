import { Router } from "express";
const router = Router(); 


//Array para almacenar mascotas: 
const mascotas = []; 

router.get("/", (req, res) => {
    res.send(mascotas); 
})

router.post("/", (req, res) => {
    const nuevaMascota = req.body; 
    mascotas.push(nuevaMascota);
    res.send({status:"success", mensaje: "Mascota creada correctamente"}); 
})

export default router;