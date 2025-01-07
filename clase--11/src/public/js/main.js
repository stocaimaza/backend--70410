//Creamos una instancia de Socket.io: 

const socket = io();  

//Vamos a guardar el nombre del usuario: 
let user; 

const chatBox = document.getElementById("chatBox"); 


//Usamos el objeto global que se llama Swal
//El método es el fire. 

Swal.fire({
    title: "Identificate", 
    input: "text", 
    text: "Ingrese un usuario para identificarse en el chat", 
    inputValidator: (value) => {
        return !value && "Necesitas escribir un nombre para continuar"
    }, 
    allowOutsideClick: false
}).then(result => {
    user = result.value; 
    //Aca me estoy guardando el nombre del usuario.
    console.log(user); 
})

chatBox.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(chatBox.value.trim().length > 0) {
            //Si el mensaje tiene mas de 0 caracterres, lo enviamos al servidor. 
            socket.emit("message", {user: user, message: chatBox.value}); 
            chatBox.value = ""; 
        }
    }
})

//messagesLogs

//Listener de mensajes: 

socket.on("messagesLogs", data => {
    const log = document.getElementById("messagesLogs");
    let mensajes = ""; 
    data.forEach( mensaje => {
        mensajes = mensajes + `${mensaje.user} dice: ${mensaje.message} <br>`;
    })
    log.innerHTML = mensajes;
})