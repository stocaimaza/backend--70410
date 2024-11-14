//Clase 1 - Principios básicos de JavaScript

//Temas: 

//1) Plantillas literales
//2) Funciones
//3) Scope
//4) Closures
//5) Clases y POO

//1) Plantillas Literales: 
//Los template strings son una forma de concatenar strings mas sencilla y legible. 

//antes: 

let mascota = "Fatiga"; 

let mascotaEdad = 5; 

console.log("Nuestro perro " + mascota + " tiene " + mascotaEdad + " años"); 

//Ahora: 

console.log(`Nuestro perro ${mascota} tiene ${mascotaEdad} años`); 
// `` alt + 96


//2) Funciones: 
//repasemos: las funciones son bloques de código que podemos reutilizar en nuestro programa. Destaquemos que las funciones deben tener una única responsabilidad. 

//FUNCIONES DECLARATIVAS

//1 Paso, las declaramos

function saludar(curso) {
    //Cuerpo de la función
    console.log("Hola curso de " + curso); 
}

//2 Paso, las invocamos: 
saludar("Backend"); 


//¿Se puede invocar una función antes de su declaración?
//Efectivamente, esto se puede hacer gracias al "hoisting" (elevación), qeu es un proceso interno que realiza el lenguaje durante la lectura del código, en donde eleva las declaraciones. (¡¡Atentis!! Esto solo funciona en las funciones declarativas!!); 

//FUNCIONES EXPRESIVAS: 

//las asignamos a variables: 

let nuevoSaludo = function(curso) {
    console.log("El mejor curso del mundo es " + curso)
}

nuevoSaludo("backendo");

//Las funciones anónimas siempre estuvieron en JS, incluso desde sus primeras versiones. 

//LO QUE SI LLEGA EN ES6 SON LAS FUNCIONES FLECHAS: 

//Funciones Flecha: 
//Las funciones flecha son una forma mas corta de escribir funciones expresivas. 

let ultimoSaludo = () => {
    console.log("Fuerza German! La comision esta con vos"); 
}

ultimoSaludo();

//Incluso se puede escribir de forma mas resumida. 

let chau = curso => console.log("Chauuu, nos vamos a dormir, curso de " + curso);
    
chau("backendiño");

//4) Scope: 
//El scope es el alcance que tienen las variables dentro de nuestro programa. 
//En JS tenemos dos tipos de Scope: 
// - GLOBAL: las variables declaradas en este scope puede ser accedidas desde cualquier parte del programa. 

// - LOCAL:  las variables declaradas en este scope solo pueden ser accedidas desde el bloque en el que fueron declaradas. 

//EJEMPLIN: 

let global = 2024;

function saludito() {
    console.log("Hola, estamos en el año " + global); 
    let curso = "Backend 1"; 
    console.log("Curso de " + curso); 
}

saludito(); 

// console.log(curso); 

//usar var es como dejar la llave de tu casa puesta en la puerta todo el tiempo.

// CLOSURES: 

//Los cierres o clausulas en JS es un concepto qeu se refiere a la capacidad de una función anidada de acceder a las variables de su función padre, incluso cuando la función padre ya termino su ejecucion. 

function padre() {
    let deudaHector = 3000000; 
    function anidada() {
        console.log(deudaHector); 
    }
    return anidada; 
}

let clausula = padre(); 
clausula(); 

// 5) CLASES: 
//Las clases son moldes que nos permiten crear objetos con caracteristicas similares. 

class Persona {
    //Podemos implementar una funcion constructora, que se ejecuta cuando creamos un objeto de esta clase. 
    constructor(nombre, edad) {
        this.nombre = nombre; 
        this.edad = edad; 
        //La palabra reservada "this" hace referencia al objeto que se esta creando. 
        //Cada vez que creamos un objeto a partir de una clase decimos que estamos creando una instancia de esa clase. 
    }
}

//Ahora vamos a crear una instancia de la clase Persona: 

let coky = new Persona("Coky Argento", 35); 
console.log(coky); 

let paola = new Persona("Paola Argento", 37); 
let moni = new Persona("Moni Argento", 55); 
let pepe = new Persona("Pepe Argento", 60); 

console.log(paola);
console.log(moni);
console.log(pepe);