import React, { useEffect, useState } from 'react'
import Task from '../components/Task'
import { fetchTask } from '../services/fetchTasks'
import { TaskType } from '../Type'

export default function MyTasks() {
  const [allTasks, setAllTasks] = useState<null| TaskType[]>(null)
  useEffect(() => {
    (
      async () => {
        const fetchedTask = await fetchTask();
        
        setAllTasks(fetchedTask)
      }
    )()
  }, [])
  return (
    <>
        <h1>MyTasks</h1>

        <section className='taskList'>
          {
            allTasks?.map( (task) => 
              <Task key={task.id} id={task.id} title={task.title} description={task.description} importance={task.importance} done={task.done}/>
            )
          }
        </section>
    </>
  )
}
