const socket =io('http://localhost:8000');

const form = documnent.getElementById('send-container');
const messageContainer = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append =(message,postion)=>{
      const messageElement = document.createElement('div');
      messageElement.innerText= message;
      messageElement.classList.add('message');
      messageElement.classList.add('postion');
      messageContainer.append(messageElement);
}

form.addEventListner('submit', (e)=>{
    e.preventDefault();
    const message= messageInput.value;
    append(`You: ${message}`, right);
    socket.emit('send',message);
    messageInput=''

})

const name= prompt("Enter your name");

socket.emit('new-user-joined', name);

socket.on('user-joined', name =>{
   append(`${name} joined the chat`, 'right')
})
 

socket.on('receive', data =>{
     append(`${data.name}: ${data.message}`, 'left')
}) 

socket.on('left', name =>{
    append(`${name}: left the chat`, 'right')
})