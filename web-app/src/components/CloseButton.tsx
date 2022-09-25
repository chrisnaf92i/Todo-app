import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type PropType = {
  deleteTask:()=>void
}

export default function CloseButton({deleteTask}:PropType) {
  return (
    <button className='CloseButton' onClick={deleteTask}>
      <FontAwesomeIcon icon={faXmark}/>
    </button>
  )
}
