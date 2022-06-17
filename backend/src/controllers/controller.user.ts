import { Request, Response } from 'express';
import prisma from '../utils/prisma';

const getUser = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.send(users);
};

const signUp = async (req: Request, res: Response) => {
    try {
        await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            },
        });
    } catch (e) {
        console.log(e);
    }
    res.send('add user');
};

const signIn = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email,
                AND: {
                    password: req.body.password,
                },
            },
        });
        if (user) {
            res.send({
                id: user.id,
                email: user.email,
                name: user.name,
            });
        } else {
            res.status(500).send('user not found');
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

export { getUser, signUp, signIn };
