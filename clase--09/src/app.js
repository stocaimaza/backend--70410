/** CLASE 9 - MOTORES DE PLANTILLAS  **/

import express from "express"; 
import viewsRouter from "./routes/views.router.js";
const app = express(); 
const PUERTO = 8080;
//1) Importamos el método del motor de plantillas. 
import { engine } from "express-handlebars"; 


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("./src/public"));

//Configuramos el motor de plantillas: 
app.engine("handlebars", engine()); 
//Aca registramos a "express-handlebars" como motor de plantillas para express. El primer argumento es la extensión del archivo y el segundo es el método del motor. 
app.set("view engine", "handlebars"); 
//Establecemos a "express-handlebars" como motor predeterminado. 
app.set("views", "./src/views"); 

//Rutas
app.use("/", viewsRouter);

//Practicamos MULTER: 
//1) Instalamos: npm i multer
//2) Importamos el módulo: 
import multer from "multer";

//Si queremos que los archivos se guarden en la carpeta correcta, con formato y el nombre original, tenemos que configurar un "storage": 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/img")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

//Creamos el objeto upload: 
//const upload = multer({dest:"./src/public/img"}); 
const upload = multer({storage}); 

//Creamos una ruta para cargar una imagen desde postman: 
app.post("/upload", upload.single("imagen"), (req, res) => {
    res.send("Imagen cargada"); 
})


//Listen
app.listen(PUERTO, () => console.log("Escuchando en el 8080"));