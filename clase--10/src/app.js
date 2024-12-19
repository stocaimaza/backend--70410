/** CLASE 10 - WEBSOCKERTS **/


//1) ¿Que es Websockets?
//2) Socket.io

//WEBSOCKETS es un protocolo de comunicación bidireccional en tiempo real. A diferencia de HTTP, donde el cliente envia una solicitud y el servidor responde, los websockets permite una comunicacion continua y en tiempo real entre el cliente y el servidor. 

//La comunicacion se realiza entre dos endpoints, y cada endpoint se conoce como socket. 

//¿Como funciona?

//1 Paso: el cliente tiene que enviar una peticion HTTP al servidor y esto se conoce como apretón de manos (handshake). 

//2 Paso: el servidor recibe la peticion, responde el saludo. Y a esto se le conoce como "abrir la conexión". 

//3 Paso: a partir de este momento la comunicación es bidireccional entre el cliente y el servidor. 


//LEVANTAMOS UN SERVIDOR: 

import express from "express";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
const app = express(); 
const PUERTO = 8080; 

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("./src/public"));

//Configuramos Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views");

//Rutas
app.use("/", viewsRouter);

//IMPORTAMOS SOCKET.IO: 
//1) Importamos el métod "Server" de la libreria Socket.io
import { Server } from "socket.io";


//Listen
//2) Me voy a guardar una referencia de mi servidor de express. 
const httpServer = app.listen(PUERTO, () => console.log(`Escuchando en el puerto: ${PUERTO}`)); 

//3) Generamos una instancia de Socket.io desde el lado del backend. 
const io = new Server(httpServer); 

//Creamos un array de usuarios: 
const usuarios = [
    {id: 1, nombre: "Tinki Winki", apellido: "Teletubies"},
    {id: 2, nombre: "Dipsi", apellido: "Teletubies"},
    {id: 3, nombre: "Lala", apellido: "Teletubies"},
    {id: 4, nombre: "Po", apellido: "Teletubies"},
    {id: 5, nombre: "Bebe Sol", apellido: "Teletubies"},
]

io.on("connection", (socket) => {
    //console.log("Un cliente se conectó conmigo");

    //¿Como hago para interpretar ese mensaje que me manda el front? 
    socket.on("mensaje", (data) => {
        console.log(data);
    })

    //Ahora el servidor le va a enviar un mensaje al cliente: 
    socket.emit("saludito", "Hola Front, ¿Como estas? ");

    //Enviamos un array de usuarios al front: 
    socket.emit("usuarios", usuarios);
})
