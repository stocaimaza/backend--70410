/** CLASE 2 - NUEVAS FUNCIONALIDADES DE ECMASCRIPT  **/

//Desestructuración: 

const pelicula = {
    titulo: "El Padrino", 
    director: "Francis Ford Coppola", 
    genero: "Drama", 
    lanzamiento: 1972
}

//Antes: 

let titulo = pelicula.titulo;
console.log(titulo);

//Ahora: 

let {director, genero, lanzamiento, titulo:tituloPeli} = pelicula; 

console.log(director);
console.log(genero);
console.log(lanzamiento);
console.log(tituloPeli);

director = "Clint Eastwood"; 

console.log(pelicula);

//Ejemplo con arrays: 

const numeros = [1, 2, 3, 4, 5]; 

//Antes: 

let uno = numeros[0];
let dos = numeros[1];
//console.log(uno);
//console.log(dos);

//Con la llegada de ES6: 

let [, , , indiceTres] = numeros; 

//console.log(indiceCero);
//console.log(indiceUno);
//console.log(indiceDos);
console.log(indiceTres);

//Valores por defecto: JS nos permite asignar valores por default a los parametros de una funcion. 

function saludar(nombre = "Invitado"){
    console.log(`Hola ${nombre}`); 
}

saludar("TinkiWinki"); 

saludar(); //Hola undefined
saludar("Dipsi"); 

//Trabajo por módulos: 

//Si yo quisiera importar el array de productosMarolio de datos.js lo puedo hacer de la siguiente manera: 

import productosMarolio from "./datos.js";


let cocacola = {
    id: 4, 
    nombre: "Coca Cola",
    precio: 500
}

productosMarolio.push(cocacola);

console.log(productosMarolio);

//CLASES: 

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido; 
        this.edad = edad; 
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} de ${this.apellido}`);
    }
}

const personita = new Persona("Doble", "LuisMiguel", 50);
const pepe = new Persona("Pepe", "Argento", 50);
const coky = new Persona("Coky", "Argento", 17); 

console.log(personita);

//¿Como hago para que un objeto pueda invocar a un método? 

personita.saludar(); 

console.log(pepe); 
console.log(coky);

//Creamos la clase estudiante: 

//Si quiero que promedio sea variable privada, tengo que agregarle el # antes del nombre de la variable. 

class Estudiante extends Persona {
    #promedio; 
    constructor(nombre, apellido, edad, carrera, promedio) {
        super(nombre, apellido, edad);
        this.carrera = carrera; 
        this.#promedio = promedio;
    }

    //Puedo acceder a esas variables privadas con un metodo get: 
    get getPromedio() {
        return this.#promedio; 
    }
}

const estudiante = new Estudiante("Juan", "Perez", 20, "Ingenieria en Sistemas", 10); 

console.log(estudiante);

//estudiante.saludar(); 

//¿Puedo hacer que una propiedad del objeto sea privada? 
console.log(estudiante.promedio); 
//Si, yo puedo crear variables privadas dentro de las clases, esto permite que algunas variables no sean accesible desde el entorno y solo sea usada de forma interna. 

//Y de esta forma lo puedo ver: 

console.log(estudiante.getPromedio); 

//Variables y métodos estaticos: 
//Son variables y metodos asociados a la clase en si. Para poder utilizarlos no require que se genere una instancia de esa clase. 

class Contador {
    static cantidad = 0;
    
    constructor(){
        Contador.cantidad++;
    }

    static obtenerCantidad(){
        return Contador.cantidad; 
    }
}

const contador1 = new Contador();  //la variable cantidad se incrementa. 
const contador2 = new Contador(); 
const contador3 = new Contador(); 

console.log(Contador.obtenerCantidad()); 


//ES7: Esta versión fue lanzada en el año 2016 y trajo dos grandes cambios: 
// - Operador de exponenciación: **
// - Includes: permite saber si hay un elemento dentro de un array o string. 

//Antes: 

let base = 4; 
let exponente = 3; 

let resultado = Math.pow(base, exponente); 
console.log(resultado);

//Ahoraaaaa:

let resultado2 = base ** exponente; 
console.log(resultado2); 


//INCLUDES: 

//Antes: 

const losSimpsons = ["Homero", "Marge", "Bart", "Lisa", "Maggie"]; 

//Antes: 

console.log(losSimpsons.indexOf("Ayudante de Santa") > -1); //true 

//Ahora con ES7: 

console.log(losSimpsons.includes("Maggie")); 

//Tambien esto lo puedo hacer con un string: 

let frase = "Hola, soy Homero Simpson"; 

console.log(frase.includes("Homero")); 

//Cambios en el ES8: fue lanzado en el año 2017. 

//Async y await lo vemos la proxima. 
//Metodos estaticos llegaron este año. 

//Objeto de ejemplo: 

const empleado = {
    nombre: "Pepe", 
    apellido: "Argento",
    edad: 45, 
    puesto: "Vendedor de zapatos"
}

//Object.values:  devuelve un array con los valores de las propiedades de un objeto: 

const resulstadoEmpleadoValues = Object.values(empleado); 
console.log(resulstadoEmpleadoValues);

//Object.entries: devuelve un array de arrays, donde cada sub array contiene la clave y valor: 

const resultadoEmpleadoEntries = Object.entries(empleado); 
console.log(resultadoEmpleadoEntries);

//Object.keys: devuelve las claves de un objeto en un array: 

const resultadoEmpleadoKeys = Object.keys(empleado); 
console.log(resultadoEmpleadoKeys);