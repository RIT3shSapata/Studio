import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from './router/router.user';
import projectRotuer from './router/router.projects';
import gameRouter from './router/router.game';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
// import socket_init from './sockets/sockets';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(projectRotuer);
app.use(gameRouter);
app.get('/', (req: Request, res: Response) => {
    res.send('hello!!!');
});

const server = http.createServer(app);
const io = new Server(server);
io.on('connection', function (socket) {
    socket.on('CONNECT_ROOM', (projectID) => {
        socket.join(projectID);
        io.in(projectID).emit('ROOM_CONNECTED', projectID);
    });
    socket.on('CODE_CHANGED', ({ PROJECT_ID, xml }) => {
        io.to(PROJECT_ID).emit('CODE_UPDATED', xml);
    });
    socket.on('RUN', (prop) => {
        io.to(prop.PROJECT_ID).emit('RUN_CODE', prop.code_);
    });
    socket.on('disconnect', (reason) => {
        console.log(`disconnect ${socket.id} due to ${reason}`);
    });
});
// socket_init(app);

server.listen(PORT, () => {
    console.log('server is running on port 5000');
});
