/** CLASE 16 - MONGO AVANZADO 1 **/

//1) Indexacion
//2) Manejo de Populations en MongoDB
//3) PRE 

import mongoose from "mongoose";
import UsuarioModel from "./models/usuario.model.js";

//mongodb+srv://coderhouse70410:coderhouse@cluster0.34nyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// const main = async () => {
//     await mongoose.connect("tubd");

//     //Verificamos si puedo ver a todos mi usuarios:

//     const respuesta = await UsuarioModel.find({"edad":{$lt:19}}).explain("executionStats"); 
//     console.log(respuesta); 
// }

//main(); 
//Usamos el método explain() para ver las estadisticas de la consulta. 
//El parametro que le pasamos es "executionStats", que me permite obtener el detalle de los tiempos de la consulta. 

//Resultados de la consulta: 
//nReturned: 25000
//executionTimeMillis: 8 milisengundos. 

//Buscamos por nombre: Carlos
//nReturned: 111
//executionTimeMillis: 11 milisengundos. 

//Peeeeeero, aplicando el index a nombre: 
//executionTimeMillis: 1 milisengundo. 

//Si busco a menores de 19, cuanto me retornaria?
// nReturned: 384,
// executionTimeMillis: 14 milisegundos

//Y si aplico el indice? 
// nReturned: 384,
// executionTimeMillis: 1 milisegundo

//Manejo de Populations en MongoDB. 

//Populate es una función de Mongoose que nnos permite relacionar documentos de diferentes colecciones. 

///////////////////////////////////////////////////////////////////////////////


//Ejercicio con Cursos y Alumnos aplicando Populations

import AlumnoModel from "./models/alumno.model.js";
import CursoModel from "./models/curso.model.js";

const main = async () => { 

    await mongoose.connect("tubd");

    //Buscamos un alumno: 
    const juanPerez = await AlumnoModel.findById("679191b2bd527fb96f5e8eb7"); 

    //Buscamos un curso: 
    const cursoBackend = await CursoModel.findById("679191c4bd527fb96f5e8ebe"); 

    //Verificamos por consola: 
    //console.log(juanPerez);
    //console.log(cursoBackend);

    //Ahora voy a ingresar el curso al alumno. 
    //juanPerez.cursos.push(cursoBackend); 

    //Actualizo el documento de MongoDB: 
    //await AlumnoModel.findByIdAndUpdate(juanPerez._id, juanPerez); 

    //Ahora... momento.. si quiero ver al alumno con sus cursos, yo puedo hacer esto: 

    const alumnoConCursos = await AlumnoModel.findById("679191b2bd527fb96f5e8eb7")
    //.populate("cursos");

    console.log(JSON.stringify(alumnoConCursos, null, 2)); 

}

main(); 


