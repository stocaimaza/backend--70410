import mongoose from "mongoose";

mongoose.connect("mongodb+srv://coderhouse70410:coderhouse@cluster0.34nyl.mongodb.net/Coderest?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados con éxito!!"))
    .catch((error) => console.log("Tenemos un error, vamos a morir, todo es bronca y dolor", error))