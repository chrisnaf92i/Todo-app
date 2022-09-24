"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const CreateTask_1 = __importDefault(require("./pages/CreateTask"));
const MyTasks_1 = __importDefault(require("./pages/MyTasks"));
function App() {
    return (<div className="App">
      <header>
        <h1>To Do List</h1>

        <nav>
          <react_router_dom_1.Link to="/"> <h2> Mes tâches </h2> </react_router_dom_1.Link>
          <react_router_dom_1.Link to="/creation-tache"> <h2> Créer une tâche </h2> </react_router_dom_1.Link>
        </nav>
      </header>      
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<MyTasks_1.default />}/>
        <react_router_dom_1.Route path="/creation-tache" element={<CreateTask_1.default />}/>
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
