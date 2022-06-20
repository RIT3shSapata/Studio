import { Application } from 'express';
import http from 'http';
import { Server } from 'socket.io';

const socket_init = (app: Application) => {
    const server = http.createServer(app);
    const io = new Server(server);

    io.on('connection', (socket) => {
        socket.on('CONNECT_ROOM', (projectID) => {
            console.log('Connected user', projectID);
            socket.join(projectID);
            io.in(projectID).emit('ROOM_CONNECTED', projectID);
        });
    });
};

export default socket_init;
