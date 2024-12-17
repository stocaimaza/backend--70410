import { Router } from "express";
const router = Router(); 

//Creamos un array de productos: 
const arrayProductos = [
    {nombre: "Fideos", descripcion: "Los mas ricos del condado", precio: 100},
    {nombre: "Arroz", descripcion: "El que no se pasa nunca", precio: 200}, 
    {nombre: "Helado", descripcion: "Mas frio que el corazon de tu ex", precio: 200}
]


router.get("/", (req, res) => {

    const usuario = {
        nombre: "Tinki",
        apellido: "Winki",
        mayorEdad: true
    }

    res.render("index", {usuario, titulo: "Esto es un titulo desde el back", arrayProductos});
})

//Contacto: 
router.get("/contacto", (req, res) => {
    res.render("contacto");
})

//Preguntas Frecuentes: 
router.get("/preguntas", (req, res) => {
    res.render("preguntas"); 
})

export default router; 