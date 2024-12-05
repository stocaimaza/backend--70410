/** CLASE 6 - SERVIDORES WEB **/

//Temas de hoy: 

//1) ¿Que es un servidor? 
//2) Protocolo HTTP
//3) Modulo Nativo HTTP
//4) Express JS
//5) Objeto Request
//6) Presentamos el ejercicio del after de mañana. 

//Servidor: software o hardware que almacena y administra recursos web. Como imagenes, archivos, sitios web, videos, juegos, datos. Su funcion es responder a las peticiones de los clientes. Es importante aclarar que un servidor puede responder a multiples peticiones de clientes al mismo tiempo. A esta relacion se la conoce como modelo cliente-servidor. 

//cliente hace un pedido = request
//servidor responde = response

//¿Bajo que protocolo se comunican el cliente y el servidor?
//HTTP.

//http: "Protocolo de transferencia de hipertexto". Es un protocolo de comunicacion que define las reglas para que se cominiquen los dispositivos. 

//Instalamos nodemon: npm install nodemon -D

//MI PRIMER SERVIDOR: 

//Primer paso: vamos a importar el modulo HTTP

//Hoy practicamos con CommonJS: 
//const http = require("http"); 

//Si yo quisiera hacerlo con ES Modules: import http from "http"; 

//Segundo paso: vamos a crear el servidor web. Para eso vamos a utilizar el método createServer() del modulo HTTP. Este metodo recibe como parametro una funcion callback que va a ser ejecutada cada vez que se realice una peticion al servidor. Esta funcion callback recibe dos parametros: request y response. 


// const server = http.createServer((request, response) => {
//     console.log("Se realizo una peticion al servidor"); 
//     response.end("quiero regalitos");  
// })

//Tercer paso: vamos a poner a escuchar nuestro servidor en un puerto de la computadora. 

const PUERTO = 8080; 
//Puerto: ubicacion especial del sistema operativo en la cual puedo acceder a una aplicacion o proceso especifico. 

// server.listen(PUERTO, () => {
//     //console.log("Escuchando en el puerto 8080"); 
//     //console.log(`Escuchando en el puerto: ${PUERTO}`); 
//     console.log(`Escuchando en el http://localhost:${PUERTO}`); 
// })

//TRABAJAMOS CON EXPRESS: 
//1) Instalamos: npm i express

//2) Importamos el modulo: 
const express = require("express");
//Si lo quieren hacer con ES Modules: import express from "express". 

//3) Creamos una aplicacion de express
const app = express(); 

//Creamos todas las rutas que necesitemos: 

//ruta "saludo"

app.get("/saludo", (req, res) => {
    res.send("Hola, bienvenido al mundo de express"); 
})

app.get("/productos", (req, res) => {
    res.send("Seccion Productos"); 
})

app.get("/contactos", (req, res) => {
    res.send("Seccion Contacto"); 
})

//Creamos nuestra ruta "USUARIOS": 

const arrayUsuarios = [
    {id: 1, nombre: "Tinki Winki", apellido: "Teletubbie"},
    {id: 2, nombre: "Dipsi", apellido: "Teletubbie"},
    {id: 3, nombre: "Lala", apellido: "Teletubbie"},
    {id: 4, nombre: "Po", apellido: "Teletubbie"},
    {id: 5, nombre: "Sol", apellido: "Teletubbie"}
]

app.get("/users", (req, res) => {
    res.send(arrayUsuarios);
})

//Voy a retornar un usuario por su ID. Ese ID lo voy a capturar de los parametros dinamicos de la URL. 

//req.params : aca se guardan todos los parametros que se envian. 

app.get("/users/:id", (req, res) => {
    //Primero tengo que capturar ese ID que viene en la URL
    //let id = req.params.id;
    
    //Otra forma de hacerlo: 
    let {id} = req.params; 
    
    console.log(typeof id); 
    //TODO LO QUE CAPTURAMOS DE PARAMETROS, VIENE EN FORMATO STRING. 

    //Segundo, voy a buscar en el array el usuario que coincida
    let usuarioBuscado = arrayUsuarios.find(teletubbie => teletubbie.id == id); 

    //Tercero, si lo encuentro, lo retorno. 
    if(usuarioBuscado) {
        res.send(usuarioBuscado)
    } else {
        res.send("El usuario que colocaste no existe en ningun mundo");
    }
})

//Req.query: me permite hacer multiples consultas que se pueden hacer a determinado endpoint. 

//CREAMOS UNA RUTA PARA GUARDAR NOMBRE Y APELLIDO: 

app.get("/clientes", (req, res)  => {
    //let nombreCliente = req.query.nombre;
    //let apellidoCliente = req.query.apellido; 

    let {nombre, apellido} = req.query; 

    res.send(`Bienvenido ${nombre} ${apellido}`); 
})

//RUTA RAIZ: 

app.get("/", (req, res) => {
    res.send("Bienvenidos a la app!"); 
})

//Ponemos a escuchar a la app: 
app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`); 
})

