/** EJERCICIO VETERINARIA **/

import express from "express"; 
const app = express(); 
const PUERTO = 8080;
import mascotasRouter from "./routes/mascotas.router.js";
import usuariosRouter from "./routes/usuarios.router.js";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
//Me permite tomar datos complejos: varias querys o datos de un formulario. 

//Rutas
app.use("/api/pets", mascotasRouter); 
app.use("/api/users", usuariosRouter); 


app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto de Mar del Plata"); 
})


//SERVICIOS DE ARCHIVOS ESTATICOS: 
//Express nos permite tener archivos estaticos, es decir archivos que no cambian en tiempo de ejucion. 
//Estos recursos estan visibles para el usuario de forma de directa y los vamos a crear en la carpeta "public"

//app.use(express.static("public"));
//Le aviso a express que estoy creando una carpeta publica, que contiene material estatico. 

//Podemos colocarle un prefijo virtual: 

app.use("/static", express.static("public")); 

//¿Cuales son las ventajas de tener un prefijo virtual? 
// - Me permite ordenarme mejor con las rutas
// - Me da una capa mas de seguridad. 