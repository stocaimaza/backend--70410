import mongoose from "mongoose";

mongoose.connect("mongodb+srv://swtocaimaza:coderhouse@cluster0.pmzgicx.mongodb.net/TPFinal?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log("Vamos a morir, tenemos un error:", error));
