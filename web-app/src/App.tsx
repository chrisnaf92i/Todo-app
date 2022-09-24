import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateTask from './pages/CreateTask';
import MyTasks from './pages/MyTasks';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>

        <nav>
          <Link to="/"> <h2> Mes tâches </h2> </Link>
          <Link to="/creation-tache"> <h2> Créer une tâche </h2> </Link>
        </nav>
      </header>      
      <Routes>
        <Route path="/" element={<MyTasks/>}/>
        <Route path="/creation-tache" element={<CreateTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
