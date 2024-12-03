//ACTIVIDAD 1: 

class ProductManager {
    static ultId = 0; 
    constructor() {
        this.products = []; 
    }

    addProduct(title, description, price, img, code, stock) {

        //Validamos que se agregaron todos los campos: 
        if(!title || !description || !price || !img || !code || !stock ) {
            console.log("Todos los campos son obligatorios, maldita rata de dos patas! Moriras!"); 
            return; 
        }

        //Validamos que el código sea único: 
        if(this.products.some(item => item.code === code)) {
            console.log("El codigo debe ser unico, tantas carreras y te decidiste por la que no tenes talento!!"); 
            return; 
        }

        //Si pasamos las validaciones, ahora podemos crear el objeto: 
        const nuevoProducto = {
            id: ++ProductManager.ultId,
            title, 
            description,
            price,
            img,
            code,
            stock
        }

        //Una vez que lo puedo crear lo pusheo al array: 
        this.products.push(nuevoProducto); 

    }

    getProducts() {
        return this.products; 
    }

    getProductById(id) {
        const producto = this.products.find(item => item.id === id);

        if(!producto) {
            console.error("Not found!"); 
        } else {
            console.log(producto); 
        }

    }
}

//Testing: 

//Se creará una instancia de la clase “ProductManager”

const manager = new ProductManager(); 

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

console.log(manager.getProducts()); 

//Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

manager.addProduct("Producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25); 

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

//Agregamos varios mas para chequear el id: 

manager.addProduct("Fideos", "No se pegan", 200, "sin imagen", "abc124", 25);
manager.addProduct("Arroz", "No se pasa", 200, "sin imagen", "abc125", 25);
manager.addProduct("Aceite", "lo podes usar en el auto despues", 200, "sin imagen", "abc126", 100);

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

//console.log(manager.getProducts()); 

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

console.log("Verificamos: "); 
manager.getProductById(40);


