import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.render("index");
})

//Ejemplo de ejercicio para la siguiente pre entrega: 
//1) Importas el ProductManager. 
//2) Creas una instancia. 
//3) Usas el método "getProducts"


router.get("/", async (req, res) => {
    try {
        const productos = await manager.getProducts(); 
        res.render("home", {productos})
    } catch (error) {
        res.status(500).send("Error fatal, se suspende la navidad");
    }
})

export default router; 