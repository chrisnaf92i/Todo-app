import express from "express";
import { getDatabase } from "./database/utils";
import TaskRepository from "./Model/Task/task.repository";
import router from "./Routes/Router";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(router);

const start = async () => {
    await getDatabase();
    await TaskRepository.initializeRepository();
    await TaskRepository.initializeTask();
    app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`))
}

start()