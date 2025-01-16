import mongoose from "mongoose";
//Nos conectamos con MongoDB Atlas: 

mongoose.connect("mongodb+srv://coderhouse70410:coderhouse@cluster0.34nyl.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la BD con éxito"))
    .catch((error) => console.log("Tenemos un error terrible!: " + error))