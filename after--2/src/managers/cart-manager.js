import {promises as fs} from "fs"; 

class CartManager {
    constructor(path) {
        this.carts = []; 
        this.path = path; 
        this.ultId = 0; 

        //Cargo los carritos almacenados en el archivo: 
        this.cargarCarritos(); 
    }

    async cargarCarritos() {
        try {
            const data = await fs.readFile(this.path, "utf-8");
            this.carts = JSON.parse(data); 
            if(this.carts.length > 0) {
                //Verifico si hay por lo menos un carrito creado. 
                this.ultId = Math.max(...this.carts.map(cart => cart.id))
                //Utilizo el metodo map para crear un nuevo array que solo obtenga los ids del carrito y con Math.max obtengo el mayor. 
            }
        } catch (error) {
            //Si no existe el archivo, lo voy a crear: 
            await this.guardarCarritos(); 
        }
    }

    async guardarCarritos() {
        await fs.writeFile(this.path, JSON.stringify(this.carts, null, 2)); 
    }

    ///////// Los métodos que me piden las consignas: 

    async crearCarrito() {
        const nuevoCarrito = {
            id: ++this.ultId,
            products: []
        }

        this.carts.push(nuevoCarrito); 

        //Guardamos el array en el archivo: 
        await this.guardarCarritos(); 
        return nuevoCarrito;
    }

    async getCarritoById(cartId) {
        const carrito = this.carts.find(c => c.id === cartId); 

        if(!carrito) {
            throw new Error("No existe un carrito con ese id"); 
        }

        return carrito; 
        //Aca tambien pueden usar un try catch. 
    }

    async agregarProductoAlCarrito(cartId, productId, quantity = 1) {
        const carrito = await this.getCarritoById(cartId); 

        //Verifico si el producto ya existe en el carrito: 
        const existeProducto = carrito.products.find(p => p.product === productId); 

        //Si el producto ya esta agregado al carrito, le aumento la cantidad. 
        //Si el producto todavia no se agrego lo pusheo. 
        if(existeProducto) {
            existeProducto.quantity += quantity; 
        } else {
            carrito.products.push({product: productId, quantity}); 
        }

        await this.guardarCarritos(); 
        return carrito; 

    }

}

export default CartManager; 