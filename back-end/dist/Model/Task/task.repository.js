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
const utils_1 = require("../../database/utils");
const task_entieties_1 = __importDefault(require("./task.entieties"));
class TaskRepository extends task_entieties_1.default {
    static initializeRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = yield (0, utils_1.getRepository)(task_entieties_1.default);
        });
    }
    static clearRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository.clear();
        });
    }
    static initializeTask() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearRepository();
            const learnJS = new task_entieties_1.default("Développement web", "Apprendre le développement web (html, css, js", "importance_3", false);
            const cook = new task_entieties_1.default("Lasagne", "cuisiner des lasagnes", "importance_1", true);
            yield this.repository.save([learnJS, cook]);
        });
    }
    static getTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find();
        });
    }
}
exports.default = TaskRepository;
