let socket = io.connection("http://localhost:3000",{forceNew:true})

socket.on("messages", (data)=>{
    render(data);
})

function render(data){
    let html = data.map(  function(element, index){
                          return `<div>
                                <p>${element.author} - <em>${element.text}</em></p>
                                </div>`;
                        }).join(" ");
    document.getElementById("divMensajes").innerHTML = html;                  
}

function addMensaje(){
    let mensaje ={text: document.getElementById("text").value,
                    author:document.getElementById("user").value};
    socket.emit("new-message", mensaje);
    return false;
}