import express from "express";
import { initializeDatabase } from "./database/utils";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

const start = () => {
    initializeDatabase();
    app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`))
}

start()