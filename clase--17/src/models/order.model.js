import mongoose from "mongoose";
//Paginacion: 
//1) Importas: 
import mongoosePaginate from "mongoose-paginate-v2"; 

const orderSchema = new mongoose.Schema({
    nombre: String, 
    tam: String, 
    precio: Number, 
    cantidad: Number
})

//2) Utilizas el método plugin

orderSchema.plugin(mongoosePaginate); 


const OrderModel = mongoose.model("orders", orderSchema); 

export default OrderModel; 