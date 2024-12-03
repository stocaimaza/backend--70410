/** CLASE 5 - MANEJO DE ARCHIVOS **/

//Temas: 

//1) File System
//2) Manejo de archivos de forma sincronica
//3) Manejo de archivos con Callback
//4) Manejo de archivos con Promesas
//5) Manejo de datos complejos
//6) Vemos el desafio (NO ENTREGABLE!)

//File System: es un manejador de archivos que ya viene incorporado con Node JS. 
//Me permite realizar operaciones de Crear, Leer, Actualizar y Borrar archivos. (CRUD)

//¿Como lo usamos?

//Hoy usamos la importacion Common JS. 

//1) Primer paso: tenemos que importar el módulo. 

const fs = require("fs"); 

//console.log(typeof fs); 

//TRABAJAMOS DE FORMA SINCRONICA: 

const ruta = "./ejemploa.txt"; 

//Crear un archivo: 

fs.writeFileSync(ruta, "Hola, estamos trabajando en un ejemplo sincronico"); 

//Leer un archivo: 

//Primero verificamos que el archivo existe antes de intentar leerlo:

// if(fs.existsSync(ruta)) {
//     let contenido = fs.readFileSync(ruta, "utf-8");
//     //Primer parametro es el path, el segundo es la codificacion. 
    
//     console.log(contenido); 
// } else {
//     console.log("No existe el archivo, vamos a morir ahhhhh"); 
// }

//Actualizar contenidos: 

//Para actualizar puedo ir pisando la data del archivo: 
fs.writeFileSync(ruta, "Hola, estamos actualizando la info"); 

//Agregar contenido al final: 

fs.appendFileSync(ruta, " y este es un texto agregado al final"); 
//AppenFile me permite agregar mas contenido al final, y no encuentra el archivo en esa ruta, lo va a crear. 

//Eliminar un archivo: 

fs.unlinkSync(ruta); 

//TRABAJANDO CON CALLBACKS: 

const ruta2 = "./ejemplob.txt"; 

//Creamos el archivo:
fs.writeFile(ruta2, "Nuevo archivo, ahora con callback", (error) => {
    //El tercer parametro es el cb, que pregunta si hubo un error. 
    if(error) return console.log("No pudimos crear el archivo"); 

    //Leemos el archivo: 
    fs.readFile(ruta2, "utf-8", (error, contenido) => {
        if(error)  return console.log("No podemos leer, algo esta mal");
        //console.log(contenido); 
        //Aca tenemos dos parametros, uno es el error, el otro es el contenido del archivo. 

        //Si queremos agregar mas info: 
        fs.appendFile(ruta2, " y le sumo mas contenido", (error) => {
            if(error) return console.log("No podemos agregar mas contenido"); 

            //Y si lo quiero eliminar? 
            fs.unlink(ruta2, (error) => {
                if(error) return console.log("No podemos eliminarlo, vamos a morir!! ahhhhh"); 
            })
        })
    })
})


//TRABAJANDO CON PROMESAS: 

//Para trabajar con promesas, tendremos que usar la propiedad "promises" del modulo fs. 

const ruta3 = "./ejemplo3.txt"; 

const operacionesAsincronicas = async () => {
    
    //Crear un archivo: 
    await fs.promises.writeFile(ruta3, "Nuevo Archivo!! Ahora con promesas"); 

    //Leer un archivo:
    let respuesta = await fs.promises.readFile(ruta3, "utf-8");
    console.log(respuesta); 

    //Si quiero agregar contenido adicional: 
    await fs.promises.appendFile(ruta3, ", agregamos este contenido adicional"); 

    //Releer: 
    respuesta = await fs.promises.readFile(ruta3, "utf-8"); 
    console.log(respuesta);

    //Eliminamos: 
    await fs.promises.unlink(ruta3); 

}

//No se olviden de invocar la función!
operacionesAsincronicas(); 

//MANEJO DE DATOS COMPLEJOS: 

//Array de personas: 

const arrayPersonas = [
    {nombre: "Pepe", apellido: "Argento", edad: 50},
    {nombre: "Moni", apellido: "Argento", edad: 38},
    {nombre: "Paola", apellido: "Argento", edad: 18},
    {nombre: "Coky", apellido: "Argento", edad: 17},
    {nombre: "Fatiga", apellido: "Argento", edad: 7}
]

const archivoArgento = "./archivo-argento.json"; 

//¿Como guardamos esta informacion? 

const guardarDatos = async () => {
    await fs.promises.writeFile(archivoArgento, JSON.stringify(arrayPersonas, null, 2));
}

guardarDatos(); 

//¿Como los recuperamos? 

const leerDatos = async () => {
    let respuesta = await fs.promises.readFile(archivoArgento, "utf-8"); 
    const arrayNuevo = JSON.parse(respuesta);
    console.log(arrayNuevo); 
}

leerDatos(); 