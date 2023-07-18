import express from "express";
import http from 'http';
import { Server } from 'socket.io';


const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let mensajes =[{id:1,
                text: "Buenas tardes",
                author:"Susana"}]

io.on("connection", (socket)=>{
    socket.emit('mensajes',mensajes);
    socket.on("new-message",(data)=>{
        mensajes.push(data);
        io.sockets.emit('mensajes',mensajes);
    })
})                


server.listen(3000, ()=> console.log("servidor puerto 3000"));