/** CLASE 3 - PROGRAMACION SINCRONICA Y ASINCRONICA **/

//Temas de hoy: 
//1) Enfoque sincronico y asincronico. 
//2) Callback
//3) Promesas
//4) Async Await

///////////////////////////////////////////////////

//1) PROGRAMACION SINCRONICA: es un enfoque o estilo de programacion en el que las tareas se ejecutan secuencialmente  en el orden en el que se escriben. 

console.log("Primero");
console.log("Segundo");
console.log("Tercero");

//Cada tarea es ejecutada en orden, y bloque la ejecucion de la siguiente tarea hasta que se complete. 

//Ejemplo con funciones: 

function a() {
    console.log("1");
    b();
}

function b() {
    console.log("2");
    c();
}

function c() {
    console.log("3");
}

a();

//- PROGRAMACION ASINCRONICA: es un estilo de programación en donde las tareas se ejecutan en segundo plano y no bloquean la ejecucion de la siguiente tarea. 
//Las tareas son independientes y no bloquean el flujo de ejecucion. Entonces cuando estoy haciendo una peticion a una API, no voy a bloquear la ejecucion de mi codigo hasta que la peticion se complete. Muy util para cuando trabajamos con Base de Datos y Servidores. 

setTimeout(() => {
    console.log("Primer tarea!");
}, 4000)

console.log("Segunda tarea, ah re loco");

//2) Callback: Es un función que pasamos como argumento a otra función. 

//Ojota! No confundir con FOS (Funcion de Orden Superior). 

//Ejemplin de callback: 

function suma(numeroA, numeroB, callback) {
    let resultado = numeroA + numeroB;
    callback(resultado);
}

function mostrarResultado(resultado) {
    console.log("El resultado de su operación es " + resultado);
}

//Voy a invocar a suma: 
suma(10, 5, mostrarResultado);


//Practicamos con MAP: 

let numeros = [1, 2, 3, 4, 5];

let numerosDuplicados = numeros.map((numerito) => numerito * 2)

console.log(numerosDuplicados);

//Metodo map: made in casa. 

function mapear(array, callback) {
    let arrayNuevo = [];
    for (let i = 0; i < array.length; i++) {
        arrayNuevo.push(callback(array[i]));
    }
    return arrayNuevo;
}

//Voy a crear mi callbacK: 

function duplicar(numerito) {
    return numerito * 2;
}

console.log("Nueva función map made in casa:" + mapear(numeros, duplicar));

//3) PROMESAS: Las promesas son objetos que representan un hecho eventual a futuro. 
//Las vamos a utilizar para operaciones asincronicas que pueden resultar exitosas o fallidas. 

//Las promesas tienen 3 estados: 

//Pendiente: (pending), estado inicial de la promesa. Ocurre cuando la operacion asincronica todavia no se completo ni se rechazo. 

//Exitoso: (fulfilled), la operacion se completa de forma exitosa y se resuelve la promesa. 

//Fallida: (rejected) La operacion asincronica fallo y se rechazo la promesa. 


//CREACION DE UNA PROMESA: 

const promesa = new Promise((resolve, reject) => {
    //Acá va el codigo que queremos ejecutar. 

    //resolve y reject son funciones que nos provee la promesa para indicarle el estado de la misma. 

    //Caso exitoso! 
    //resolve("Exito en la promesa!! Me llego mi camiseta firmada por Messi"); 

    //caso Fallido!
    reject("Error en la promesa, me llego otra taza mas y el par de medias");

})

console.log(promesa);

//MÉTODOS THEN Y CATCH: estos metodos me permiten manejar el resultado de la promesa. Se usan concatenados. 

//THEN: lo usamos cuando la promesa se resuelve exitosamente. 
//CATCH: lo usamos cuando se rechaza la promesa. 
//FINALLY: se ejecuta siempre, se resuelva o se rechace la promesa. 


promesa
    .then(() => console.log("EXITOOOO INFINITOOO"))
    .catch(() => console.log("SUFRIMIENTO MORTAL "))
    .finally(() => console.log("Esto aparece siempre, re aburrido"))

//EJEMPLITO CON PRODUCTOS: 

const productos = [
    { id: 1, nombre: "Mesa", precio: 5000 },
    { id: 2, nombre: "Silla", precio: 1500 },
    { id: 3, nombre: "Vino", precio: 300 }
]

//Voy a crear una promesa que me devuelva un producto por su ID: 

function buscarProductoPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(producto => producto.id === id);
            if (producto) {
                resolve(producto);
            } else {
                reject("No existe el producto, moriras! rata de dos patas!");
            }
        }, 2000)
    })
}

buscarProductoPorId(20)
    .then(producto => console.log(producto))
    .catch(error => console.error(error))


//4) Async Await
//Con la palabra await genero una pausa en la ejecucion del codigo hasta que la promesa se resuelva o se rechace. 

//Ejemplo re loco: 

// async function buscadoraProductoPorId(id) {
//     const producto = await buscarProductoPorId(id);
//     console.log(producto); 
// }



//Generalmente cuando trabajamos con async await lo usamos con un bloque try catch: 

async function buscadoraProductoPorId(id) {
    try {
        const producto = await buscarProductoPorId(id); 
        console.log(producto); 
        //firulais(); 
    } catch (error) {
        console.log(error); 
    }
}

buscadoraProductoPorId(30); 

//alert("Funciona?");}

//CONSULTAMOS A UNA API: 

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then( respuesta => respuesta.json())
//     .then( usuarios => console.log(usuarios))
//     .catch( error => console.log("Tenemos un error: ", error))

//Ejemplo con async await: 

async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    const usuarios = await respuesta.json();
    console.log(usuarios); 
}

obtenerUsuarios(); 