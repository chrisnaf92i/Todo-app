"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./database/utils");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use(express_1.default.json());
const start = () => {
    (0, utils_1.initializeDatabase)();
    app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));
};
start();
