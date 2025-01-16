//1) Importar mongoose: 
import mongoose from "mongoose";

//Dejar una constante con el nombre de la colección. 

const clientesCollection = "clientes"; 

//Definimos el "schema": este es un objeto que nos permite definir la forma de los documentos. Configuramos el nombre de los campos y los tipos de datos que almacenaran. 

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String, 
    edad: Number
})

//Definimos el modelo: 
const ClientesModel = mongoose.model(clientesCollection, clienteSchema); 

export default ClientesModel; 