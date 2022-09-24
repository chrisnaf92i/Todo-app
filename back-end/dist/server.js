"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./database/utils");
const task_repository_1 = __importDefault(require("./Model/Task/task.repository"));
const Router_1 = __importDefault(require("./Routes/Router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use(Router_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, utils_1.getDatabase)();
    yield task_repository_1.default.initializeRepository();
    yield task_repository_1.default.initializeTask();
    app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));
});
start();
