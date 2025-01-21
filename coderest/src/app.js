/** PRACTICA INTEGRADORA **/

//CODEREST

//Instalan: npm i express express-handlebars mongoose multer 

import express from "express"; 
import { engine } from "express-handlebars";
import routerImagenes from "./routes/imagen.router.js";
import multer from "multer"; 
const app = express(); 
const PUERTO = 8080; 
import "./database.js"; 

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.static("./src/public")); 

//Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

//Rutas

app.use("/", routerImagenes); 


app.listen(PUERTO, () => console.log(`Escuchando en el puerto: ${PUERTO}`));

