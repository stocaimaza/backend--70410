import { Router } from "express";
const router = Router(); 

//Importamos el productManager: 

import ProductManager from "../managers/product-manager.js"; 
const manager = new ProductManager("./src/data/productos.json"); 

//Ruta para listar todos los productos: 

router.get("/", async (req, res) => {
    //Me guardo el query limit: 
    let limit = req.query.limit; 

    const productos = await manager.getProducts(); 
    
    if(limit) {
        res.send(productos.slice(0, limit)); 
    } else {
        res.send(productos); 
    }
})

//Ruta para retornar un producto por id: 

router.get("/products/:pid",  async (req, res) => {
    let id = req.params.pid; 
    const productoBuscado = await manager.getProductById(parseInt(id)); 
    res.send(productoBuscado); 
})


export default router; 