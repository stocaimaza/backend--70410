import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        //index: true
    }, 
    apellido: String, 
    email: {
        type: String, 
        unique: true, 
        required: true
    }, 
    edad: {
        type: Number, 
        index: true
    }
})

const UsuarioModel = mongoose.model("usuarios", usuarioSchema); 

export default UsuarioModel; 