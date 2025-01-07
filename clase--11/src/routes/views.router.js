import { Router } from "express";
const viewsRouter = Router(); 

viewsRouter.get("/", (req, res) => {
    //res.send("Hola Mundo, bienvenido 2025!!!!!"); 
    res.render("index"); 
})

export default viewsRouter; 