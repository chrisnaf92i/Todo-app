import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import CreateTask from './pages/CreateTask';
import MyTasks from './pages/MyTasks';

function App() {
  return (
    <div className="App">
      <Header/>  
      <Routes>
        <Route path="/" element={<MyTasks/>}/>
        <Route path="/creation-tache" element={<CreateTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
