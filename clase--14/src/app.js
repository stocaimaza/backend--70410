/** CLASE 14 - MONGOOSE **/

//Temas de hoy: 

//1) Los diferentes clientes para base de datos
//2) MongoDB Atlas 
//3) DBaas (Database as a service)
//4) Configuración e instalacion de mongoose
//5) CRUD en nuestra aplicación. 

//Instalamos mongoose: npm i mongoose

import express from "express"; 
import clientesRouter from "./routes/clientes.router.js";
const app = express(); 
const PUERTO = 8080; 
import "./database.js";

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

//Rutas
app.use("/clientes", clientesRouter); 

app.listen(PUERTO, () => console.log("Que calor!:  " + PUERTO)); 

