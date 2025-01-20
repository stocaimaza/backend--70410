import { Router } from "express";
const clientesRouter = Router(); 

//1) Importas el ClientesModel: 
import ClientesModel from "../models/clientes.model.js";

//GET: 
clientesRouter.get("/", async (req, res) => {
    try {
        const clientes = await ClientesModel.find();
        res.send(clientes); 
    } catch (error) {
        res.status(500).json({mensaje: "Error en el servidor, vamos a morir!!!"}); 
    }
})

//POST: 

clientesRouter.post("/", async (req, res) => {
    try {
        const cliente = new ClientesModel(req.body); 
        await cliente.save(); 
        res.send({mensaje: "Cliente generado exitosamente", cliente}); 
    } catch (error) {
        res.status(500).json({mensaje: "Error fatal, terrible, mounstruuooosoooooo"}); 
    }
})

//PUT: actualizamos un cliente por su ID

clientesRouter.put("/:id", async (req, res) => {
    try {
        const cliente = await ClientesModel.findByIdAndUpdate(req.params.id, req.body); 
        //No se olviden de validar si encuentran el usuario. 
        res.send("Todo bien! ya te lo actualizamos!"); 
    } catch (error) {
        res.status(500).send("Todo mal, no se actualizó"); 
    }
})

//DELETE: eliminamos un cliente por su id

clientesRouter.delete("/:id", async (req, res) => {
    try {
        const cliente = await ClientesModel.findByIdAndDelete(req.params.id); 
        //No se olviden de validar si encuentran el usuario. 
        res.send("Cliente eliminado!");
    } catch (error) {
        res.status(500).send("error terrible, todo es bronca y dolor"); 
    }
})

export default clientesRouter;