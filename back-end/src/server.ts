import express from "express";
import { getDatabase } from "./database/utils";
import TaskRepository from "./Model/Task/task.repository";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

const start = async () => {
    await getDatabase();
    await TaskRepository.initializeRepository();
    await TaskRepository.initializeTask();
    app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`))
}

start()