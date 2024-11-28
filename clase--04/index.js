/** CLASE 4 - NODE Y NPM  **/

//Temas: 

//1) Node
//2) Modulos Nativos y Modulos de terceros
//3) NPM
//4) Inicializamos un proyecto con NPM 
//5) Instalaciones globales y locales
//6) Versionado de dependencias
//7) Politicas a la hora de actualizar dependencias. 

//CONCEPTOS IMPORTANTES: 

//MODULOS: es un archivo de JS que contiene un conjunto de funciones que nos permiten resolver una tarea en particular. 

//A) Modulos escritos por nosotros mismos. 

//Existen dos formas de trabajar con modulos en Node JS: 
//Common JS y la ES Modules

//Importamos con common js: 

// const saludos = require("./saludos.js"); 

// saludos.temprano(); 

// saludos.tarde(); 

// saludos.noche(); 

//¿Como creamos un package.json?
//npm init
//npm init --yes (toma las opciones por default)

import {temprano, tarde, noche} from "./saludos.js"; 

temprano(); 
tarde(); 
noche(); 

//Modulos Nativos de Node JS: 
//Son los que vienen por defecto con Node JS. Y ya contienen un conjunto de funciones que nos permite resolver alguna tarea en particular. 

//Algunos de los más conocidos: 

//fs: lo usamos para trabajar con archivos (ejemplo: txt, json)
//http: lo usamos para crear un servidor
//path: para trabajar con las rutas de los archivos. 
//crypto: lo usamos para encriptar datos. 
//timers: para trabajar con tareas asincronicas
//console: para mostrar mensajes en consola

//C) Modulos de Terceros

//Vamos a instalar un modulo de terceros: 
//npm install express
//Tambien lo podemos hacer con el atajo: npm i mongoose

//Dependencia: es un paquete o modulo externo que mi proyecto necesita para funcionar correctamente. 

//Paquete: Es un conjunto de modulos que resuelven una tarea en particular. 

//Dependencias de Desarrollo: solo me acompañan en la etapa de elaboracion del codigo. 
//npm i nodemon -D
//Nodemon me permite reiniciar el servidor frente a cualquier cambio en el codigo. 

//Scripts en el package.json: comandos personalizados. 

console.log("Olis, ya casi es viernes!");
console.log("En un ratito terminamos");
console.log("Tengo hambre");

//Instalamos sass de forma global: 

//npm i sass -g

//Y si quiero revisar todas las dependencias globales que tengo: 
//npm list -g

//Si quiero desinstalar dependencias: 

//npm uninstall express

