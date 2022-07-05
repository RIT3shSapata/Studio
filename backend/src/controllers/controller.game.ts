import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import prisma from '../utils/prisma';

const saveGame = async (req: Request, res: Response) => {
    const { authorID, id, name, code, game } = req.body;
    try {
        const updatedGame = await prisma.game.update({
            where: {
                id: +id,
            },
            data: {
                name: name,
                authorID: authorID,
                code: code,
                game: JSON.stringify(game),
            },
        });
        res.send({ msg: 'Game saved successfully' });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const createGame = async (req: Request, res: Response) => {
    try {
        const { name, authorID, code, game } = req.body;
        const newGame = await prisma.game.create({
            data: {
                name: name,
                authorID: authorID,
                code: code,
                game: JSON.stringify(game),
            },
        });
        res.send({ id: newGame.id });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const getGame = async (req: Request, res: Response) => {
    try {
        const { authorID, name } = req.body;
        const game = await prisma.game.findFirst({
            where: {
                authorID: authorID,
                name: name,
            },
        });
        if (game) {
            res.send(game);
        } else {
            res.status(204).send({ msg: 'Game not found' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

export { saveGame, createGame, getGame };
