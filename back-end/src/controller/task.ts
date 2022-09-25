import { Request, Response } from "express";
import TaskRepository from "../Model/Task/task.repository";
import { getErrorMessage } from "../utils";

const get = async (req:Request, res:Response) => {
    const tasks = await TaskRepository.getTasks();

    res.json(tasks)
}

const deleteTask = async (req:Request, res: Response) => {
    const { id } = req.params;
    if(!id) {
        res.status(400).json({message:"l'id est requis"});
    }else {
        try {
            await TaskRepository.deleteTask(id);
            res.status(200).json({message:"Suppression de la tâche réussie"})
        }
        catch ( error ) {
            res.status(400).json(getErrorMessage(error))
        }
    }
}

const changeDoneTask = async (req:Request, res:Response) => {
    const { id } = req.params;

    if(!id) {
        res.status(400).json({message:"l'id est requis"});
    }else {
        try {
            await TaskRepository.setDoneTask(id);
            res.status(200).json({message:"changement de l'état"})
        }
        catch ( error ) {
            res.status(400).json(getErrorMessage(error))
        }
    }
}

export {
    get,
    deleteTask,
    changeDoneTask
}
