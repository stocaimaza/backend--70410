const express = require("express"); 
const app = express(); 
const PUERTO = 8080; 

//Importamos el productManager: 
const ProductManager = require("./managers/product-manager.js");
const manager = new ProductManager("./src/data/productos.json"); 

//Rutas
app.get("/", (req, res) => {
    res.send("Hola mundo!"); 
})

//Ruta para listar todos los productos: 

app.get("/products", async (req, res) => {
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

app.get("/products/:pid",  async (req, res) => {
    let id = req.params.pid; 
    const productoBuscado = await manager.getProductById(parseInt(id)); 
    res.send(productoBuscado); 
})

//Listen

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
})

