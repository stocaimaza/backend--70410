/** Calculadora de Edad  **/

//importamos la dependencia: 
import moment from "moment"; 

//Variable para la fecha actual. 
let fechaActual = moment(); 

//Variable para la fecha de nacimiento.
let fechaNacimiento = moment("1987-03-10"); 

//Verificamos que la fecha es valida: 

if(fechaNacimiento.isValid()) {
    let diasPasados = fechaActual.diff(fechaNacimiento, "days"); 

    //Mostramos el resultado: 
    console.log(`Pasaron ${diasPasados} dias desde que naci`); 
} else {
    console.log("Todo es invalido! Moriras! Rata de dos patas!"); 
}