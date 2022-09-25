import React from 'react'
import { deleteOneTask } from '../services/deleteTask'
import CloseButton from './CloseButton'

type PropType= {
  id:string,
  title:string,
  description:string,
  importance:string,
  done:boolean,
  onDelete:()=>void
}

export default function Task({ onDelete, id, title, description, importance, done }: PropType) {
  const onDeleteTask = async () => {
    await deleteOneTask(id)
    onDelete()
  }
  return (
    <article className={`TaskCard ${importance}`}>
        <input type="checkbox" className='Checkbox' checked={done}/>
        <div className="textContainer">
          <h1> { title } </h1>
          <p> { description } </p>    
        </div>

        <CloseButton deleteTask={ onDeleteTask } />
    </article>
  )
}
