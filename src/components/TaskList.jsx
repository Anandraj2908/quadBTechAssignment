import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTask ,reloadTasks} from '../store/taskSlice'

function TaskList() {
    const dispatch=useDispatch()
    const tasks = useSelector(state => state.tasks);

    //logic to get taskList values from localStorage when visiting the website for the next session
    useEffect(()=>{
      const storedTasks=JSON.parse(localStorage.getItem("tasks"))
      if(storedTasks && storedTasks.length>0 ){
        dispatch(reloadTasks(storedTasks))
      }
    },[dispatch])

    //storing the task value to localStorage when a task is added
    useEffect(()=>{
      localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])
  return (
    <div className=''>
      <ul className='list-none flex flex-col  items-center'>
        {tasks.map((task) =>(
            <li key={task.id} className="flex justify-between items-center bg-zinc-800 p-3 m-4 rounded w-8/12">
                <div className='text-white mx-4 overflow-hidden overflow-ellipsis'>{task.text}</div>
                <button onClick={()=> dispatch(removeTask(task.id))}
                className='text-white bg-red-500 hover:bg-red-600 border-0 py-1 px-4 rounded'>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
