/* Generamos una instancia de Socket.io, ahora desde el lado del cliente */

const socket = io(); 

//Cuando yo quiero comenzar con la conexion y voy a emitir un mensaje al servidor, puedo hacer lo siguiente: 

//método emit = emitir mensaje
//metodo on = escuchar mensajes

socket.emit("mensaje", "Hola, te estoy escribiendo desde el front"); 

//Ahora escuchamos un mensaje del backend: 

socket.on("saludito", (data) => {
    console.log(data); 
})

//Recibimos el array de usuarios: 
socket.on("usuarios", (data) => {
    const listaUsuarios = document.getElementById("lista-usuarios"); 
    listaUsuarios.innerHTML = ""; 
    data.forEach(usuario => {
        listaUsuarios.innerHTML += `<li> ${usuario.nombre} - ${usuario.apellido} </li>`
    })    
})