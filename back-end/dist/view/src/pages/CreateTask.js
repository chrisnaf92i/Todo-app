"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function CreateTask() {
    return (<>
            <form>
                <label>
                    <h3> Nom de la tâche</h3>
                    <input type="text"/>
                </label>

                <br />
                <br />

                <label>
                    <h3> Contenu de la tache </h3>
                    <textarea cols={30} rows={8}/>
                </label>

                
                <br />
                <br />

            <label>
                    <h3> Importance de la tache : </h3>
                    <select>
                        <option value="importance-1"> Peu importante </option>
                        <option value="importance_2"> Moyennement importante </option>
                        <option value="importance_3"> très importante </option>
                    </select>
            </label>
            
            <br />
            <br />

            <button> Créer la tâches </button>
            </form>
        </>);
}
exports.default = CreateTask;
