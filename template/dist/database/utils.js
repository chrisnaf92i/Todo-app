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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "mydatabase.sqlite",
    logging: ["query", "error"],
    entities: []
});
exports.dataSource = dataSource;
let initialized = false;
const initializeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!initialized) {
        yield dataSource.initialize();
        initialized = true;
        console.log("Connexion à la base de donnée réussie");
    }
});
exports.initializeDatabase = initializeDatabase;
