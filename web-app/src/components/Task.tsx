import React, { useState } from 'react'
import { deleteOneTask } from '../services/deleteTask'
import { changeDoneTaks } from '../services/donedTask'
import { fetchTask } from '../services/fetchTasks'
import ChoiceBox from './ChoiceBox'
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
  const onDeleteTask = () => {
    setCanDelete(true)
  }
  const [canDelete, setCanDelete] = useState(false)

  const confirmDelete = async () => {
    await deleteOneTask(id);
    onDelete();
  }

  const cancelDelete = async () => {
    setCanDelete(false)
  }

  const handleChangeDone = async () => {
    await changeDoneTaks(id);
    onDelete()
  }

  return (
    <article className={`TaskCard ${importance} ${done ? "done":""}`}>
        {
          canDelete?
            <ChoiceBox onConfirm={confirmDelete} onCancel={cancelDelete}/>
            :
            <></>
        }
        <input onChange={handleChangeDone} type="checkbox" className='Checkbox' checked={done}/>
        <div className="textContainer">
          <h2 className="title"> { title } </h2>
          <p> { description } </p>    
        </div>

        <CloseButton deleteTask={ onDeleteTask } />
    </article>
  )
}
