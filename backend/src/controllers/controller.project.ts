import { Request, Response } from 'express';
import prisma from '../utils/prisma';

const addProject = async (req: Request, res: Response) => {
    try {
        const project = await prisma.project.create({
            data: {
                name: req.body.name,
                value: req.body.value,
                author: {
                    connect: {
                        id: req.body.authorId,
                    },
                },
            },
            include: {
                author: true,
            },
        });
        res.send(project);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await prisma.project.findMany({
            where: {
                authorId: req.body.id,
            },
        });
        res.send(projects);
    } catch (e) {
        res.status(500).send(e);
    }
};

const getProject = async (req: Request, res: Response) => {
    try {
        const project = await prisma.project.findFirst({
            where: {
                id: +req.body.id,
            },
        });
        res.send(project);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const getAllProjects = async (req: Request, res: Response) => {
    const projects = await prisma.project.findMany({});
    res.send(projects);
};

export { addProject, getProjects, getAllProjects, getProject };
