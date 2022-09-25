import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <h1>To Do List</h1>

        <nav>
          <Link to="/"> <h2> Mes tâches </h2> </Link>
          <Link to="/creation-tache"> <h2> Créer une tâche </h2> </Link>
        </nav>
    </header>    
  )
}
