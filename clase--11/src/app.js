/** CHAT COMUNITARIO **/
//npm i express express-handlebars socket.io

import express from "express";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";
const app = express(); 
const PUERTO = 8080; 

//Middleware
app.use(express.json()); 
app.use(express.static("./src/public")); 

//Configuramos Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Rutas
app.use("/", viewsRouter);

//1) Me guardo una referencia del servidor HTTP para pasarle a socket.io.
const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto de Mar del Plata`); 
})

//2) Creamos la instancia de socket.io pasandole como parametro el servidor http. 

const io = new Server(httpServer); 

//3) Crear un array para guardar los mensajes que se envian en el chat. 

let messages = []; 

io.on("connection", (socket) => {
    socket.on("message", data => {
        //Recibo la data del cliente y lo voy a pushear en el array que declaramos arriba. 
        messages.push(data); 
        //Enviamos el historial de mensajes al cliente. 
         io.emit("messagesLogs", messages); 
    })
})



