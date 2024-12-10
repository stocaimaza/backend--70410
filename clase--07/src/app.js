/** CLASE 7 - EXPRESS AVANZADO **/

//Temas de hoy: 

//1) Codigos de estado
//2) ¿Que es una API?
//3) API Rest
//4) Metodos de la petición
//5) Postman 
//6) Practicamos: GET - POST - PUT - DELETE

//1) CODIGOS DE ESTADOS: Cada vez que hacemos una peticion al servidor, este no solamente nos responde con informacion, tambien nos puede informar el "estado de la peticion" por medio de estos numeritos de 3 cifras. 

//Los codigos de estados se dividen en 5 clases: 


//1xx: Son respuestas informativas, es decir que me indica que el servidor recibio la solicitud y se continua con el proceso. 
//2xx: Son respuestas exitosas. indica que indica que la peticion fue recibida, entendida y aceptada exitosamente. 
//3xx: Redirecciones, el cliente necesita realizar algunas acciones adicinoales para completar la solicitud. 
//4xx: Errores del cliente, indican que hubo un error por parte del cliente al realizar la peticion. 
//5xx: Errores del servidor, indican que hubo un error por parte del servidor al procesar la solicitud. 

//Los mas usados: 
//200: Ok. 
//400: Bad Request. La solicitud no puede ser entendida por el servidor. 
//401: Unahtorized. 
//403: Forbidden. El servidor no puede responder a la solicitud del cliente porque sus credenciales no tiene autorizacion para ese contenido. 
//404: Not found. Recurso no encontrado. 
//500: Internal Server Error. 


//¿Que es una API? 
//API es el acronimo de Application Programming Interface, "Interfaz de Programacion de Aplicaciones". 
//Es un conjunto de reglas que permiten que dos equipos puedan integrarse y trabajar juntos. 
//Recuerden los ejemplos del restaurante, y del contrato. 

//REST: hace referencia a la estructura de los datos. 
//Los dos formatos mas comunes son JSON y XML. 

//////////////////////////////////////////////////////////////////

//LEVANTAMOS NUESTRO SERVIDOR: 

import express from "express"; 
const app = express(); 
const PUERTO = 8080; 

//Middleware
app.use(express.json()); 
//Aca le digo al servidor que voy a trabajar con JSON. 
app.use(express.urlencoded({extended: true})); 
//Aca nos permite gestionar multiples datos desde el cliente. 

//Rutas: 

app.get("/", (req, res) => {
    res.send("Hola Comisión!"); 
})


//Armemos un sistema de gestión de Clientes: 

const clientes = [
    {id: "1", nombre: "Lionel", apellido: "Messi"},
    {id: "2", nombre: "Cristiano", apellido: "Ronaldo"},
    {id: "3", nombre: "Eber", apellido: "Ludueña"},
]

//1) Creamos una ruta que nos traiga a todos nuestros clientes: 

app.get("/clientes", (req, res) => {
    res.send(clientes); 
})

//2) Creamos una ruta que recibe un parametro dinamico del id del cliente buscado

app.get("/clientes/:id", (req, res) => {
    let id = req.params.id; 

    const clienteBuscado = clientes.find(cliente => cliente.id === id); 

    if(clienteBuscado) {
        return res.send(clienteBuscado); 
    } else {
        return res.send("No se encuentra el cliente con ese ID, moriras mientras duermeeeesss"); 
    }
})

//3) Creamos una ruta post para almacenar un nuevo cliente

app.post("/clientes", (req, res) => {
    const nuevoCliente = req.body; 

    clientes.push(nuevoCliente)    ; 
    console.log(clientes); 
    res.send("Cliente creado");
})

//Listen: 
app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`); 
})



