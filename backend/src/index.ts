import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from './router/router.user';
import projecRotuer from './router/router.projects';
import cors from 'cors';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(projecRotuer);
app.get('/', (req: Request, res: Response) => {
    res.send('hello!!!');
});

app.listen(PORT, () => {
    console.log('server is running on port 5000');
});
