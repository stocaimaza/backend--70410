//const fs = require("fs").promises; 
//con ESModules: import {promises as fs} from "fs"; 
import {promises as fs} from "fs";

//ACTIVIDAD 2: 

class ProductManager {
    static ultId = 0; 
    constructor(path) {
        this.products = []; 
        this.path = path; 
        //La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.

    }

    async addProduct({title, description, price, img, code, stock}) {

        //Yo puedo leer el archivo y guardarme el array con los productos: 
        const arrayProductos = await this.leerArchivo(); 

        //Validamos que se agregaron todos los campos: 
        if(!title || !description || !price || !img || !code || !stock ) {
            console.log("Todos los campos son obligatorios, maldita rata de dos patas! Moriras!"); 
            return; 
        }

        //Validamos que el código sea único: 
        if(arrayProductos.some(item => item.code === code)) {
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
        arrayProductos.push(nuevoProducto); 

        //Una vez que agregamos el nuevo producto al array, guardamos el array al archivo: 
        await this.guardarArchivo(arrayProductos); 
    }

    async getProducts() {
        const arrayProductos = await this.leerArchivo(); 
        return arrayProductos;
    }

    async getProductById(id) {
        //Primero leo el archivo y genero el array: 
        const arrayProductos = await this.leerArchivo();
        const producto = arrayProductos.find(item => item.id === id);

        if(!producto) {
            return "Not Found"; 
        } else {
            return producto; 
        }
    }

    //Se pueden armar unos métodos auxiliares que guarden el archivo y recuperen los datos: 

    async guardarArchivo(arrayProductos) {
        try {
            await fs.writeFile(this.path, JSON.stringify(arrayProductos, null, 2))
        } catch (error) {
            console.log("Tenemos un error al guardar el archivo"); 
        }
    }

    async leerArchivo() {
        try {
            const respuesta = await fs.readFile(this.path, "utf-8");
            const arrayProductos = JSON.parse(respuesta); 
            return arrayProductos; 
        } catch (error) {
            console.log("Tenemos un error al leer el archivo"); 
        }
    }
}

//module.exports = ProductManager; 
export default ProductManager; 