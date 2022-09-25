import { Request, Response } from "express";
import TaskRepository from "../Model/Task/task.repository";

const get = async (req:Request, res:Response) => {
    const tasks = await TaskRepository.getTasks();

    res.json(tasks)
}

export {
    get
}