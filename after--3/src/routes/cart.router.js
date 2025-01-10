import { Router } from "express";
const router = Router(); 

//Llamamos al CartManager: 
import CartManager from "../managers/cart-manager.js";
const manager = new CartManager("./src/data/carts.json"); 

//1) Crear un nuevo carrito: 

router.post("/", async (req, res) => {
    try {
        const nuevoCarrito = await manager.crearCarrito(); 
        res.json(nuevoCarrito); 
    } catch (error) {
        res.status(500).json({error: "Error al intentar crear un carrito, moriras!"}); 
    }
})

//2) Listamos los productos que pertenecen a determinado carrito: 

router.get("/:cid", async (req, res) => {
    const cartId = parseInt(req.params.cid); 

    try {
        const carritoBuscado = await manager.getCarritoById(cartId); 
        res.json(carritoBuscado.products); 
    } catch (error) {
        res.status(500).json({error: "Todo mal, nos equivocamos de carrera, esto no es lo nuestro!!"}); 
    }
})

//3) Agregar productos al carrito: 

router.post("/:cid/product/:pid", async (req, res) => {
    const cartId = parseInt(req.params.cid); 
    const productId = req.params.pid; 
    const quantity = req.body.quantity || 1; 

    try {
        const actualizarCarrito = await manager.agregarProductoAlCarrito(cartId, productId, quantity); 
        res.json(actualizarCarrito.products);

    } catch (error) {
        res.status(500).json({error: "Error fatal se suspende la navidad"}); 
    }
})

export default router; 