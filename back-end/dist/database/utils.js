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
exports.getRepository = exports.getDatabase = void 0;
const typeorm_1 = require("typeorm");
const task_entieties_1 = __importDefault(require("../Model/Task/task.entieties"));
const dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "mydatabase.sqlite",
    synchronize: true,
    logging: ["query", "error"],
    entities: [task_entieties_1.default]
});
let initialized = false;
const getDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!initialized) {
        yield dataSource.initialize();
        initialized = true;
        console.log("Connexion à la base de donnée réussie");
    }
    return dataSource;
});
exports.getDatabase = getDatabase;
function getRepository(entity) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield getDatabase()).getRepository(entity);
    });
}
exports.getRepository = getRepository;
