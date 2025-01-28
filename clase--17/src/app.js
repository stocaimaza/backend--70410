/** CLASE 17 - MONGO AVANZADO 2 **/

//Temas de la ultima clase: 
//1) Agregaciones
//2) Paginacion
//3) TP Final y consignas

import mongoose from "mongoose";
import OrderModel from "./models/order.model.js";

const main = async () => {

    mongoose.connect("mongodb+srv://coderhouse70410:coderhouse@cluster0.34nyl.mongodb.net/MongoAvanzado2?retryWrites=true&w=majority&appName=Cluster0")

    //Ejercicio: Calculamos el total de pizzas vendidas por sabor en tamaño familiar. 

    // const resultado = await OrderModel.aggregate([
    //     {
    //         //1 Stage: voy a machear con el tam "familiar"
    //         $match: {
    //             tam: "familiar"
    //         }

    //     }, 
    //     {
    //         //2 Stage: 
    //         $group: {
    //             _id: "$nombre", 
    //             total: {
    //                 $sum: "$cantidad"
    //             }
    //         }

    //     },
        
    //     //Nuevas peticiones de nuestra Marketing Lead: 

    //     {
    //         //Ordenamos de mayor a menor
    //         $sort: {
    //             total: -1
    //         }
    //     }, 
    //     {
    //         $group: {
    //             _id: 1, 
    //             orders: {
    //                 $push: "$$ROOT"
    //                 //Root hace referencia al documento actual. 
    //             }
    //         }
    //     },
    //     //Una vez que agrupamos los resultados, los guardamos en una coleccion: 
    //     {
    //         $project: {
    //             _id: 0, 
    //             orders: "$orders"
    //             //Aca le decimos que el campo orders va a ser igual a los resultado que guardamos en el paso anterior. 
    //         }
    //     }, 
    //     //Ultimo paso super importante, hacemos el merge. 
    //     {
    //         $merge: {
    //             into: "reports"
    //         }
    //     }
    //   ])

        //Paginacion: 

        const resultado = await OrderModel.paginate({"tam":"familiar"}, {limit: 4, page: 1})

    

    //Verificamos el resultado: 
    console.log(resultado);

}

//main(); 

//Generamos un pequeño servidor: 

import express from "express"; 
const app = express(); 
const PUERTO = 8080; 
import { engine } from "express-handlebars";

mongoose.connect("mongodb+srv://coderhouse70410:coderhouse@cluster0.34nyl.mongodb.net/MongoAvanzado2?retryWrites=true&w=majority&appName=Cluster0")


//Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

//Express-handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

//Rutas

app.get("/pizzas", async (req, res) => {
    const page = req.query.page || 1;
    const limit = 2; 
    const pizzas = await OrderModel.paginate({}, {limit, page})
    
    //Recuperamos los docs: 
    const pizzasResultadoFinal = pizzas.docs.map(
        pizza => {
            const {_id, ...rest} = pizza.toObject();
            return rest
        }
    )

    res.render("pizzas", {
        pizzas: pizzasResultadoFinal, 
        hasPrevPage: pizzas.hasPrevPage,
        hasNextPage: pizzas.hasNextPage,
        prevPage: pizzas.prevPage,
        nextPage: pizzas.nextPage, 
        currentPage: pizzas.page, 
        totalPages: pizzas.totalPages
    });
})

app.listen(PUERTO, () => console.log("si si funciona!"));