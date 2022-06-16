import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('hello!!!');
});

app.listen(5000, () => {
    console.log('server is running on port 5000');
});