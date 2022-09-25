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
exports.deleteTask = exports.get = void 0;
const task_repository_1 = __importDefault(require("../Model/Task/task.repository"));
const utils_1 = require("../utils");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_repository_1.default.getTasks();
    res.json(tasks);
});
exports.get = get;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: "l'id est requis" });
    }
    else {
        try {
            yield task_repository_1.default.deleteTask(id);
            res.status(200).json({ message: "Suppression de la tâche réussie" });
        }
        catch (error) {
            res.status(400).json((0, utils_1.getErrorMessage)(error));
        }
    }
});
exports.deleteTask = deleteTask;
