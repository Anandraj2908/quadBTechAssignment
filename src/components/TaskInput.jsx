import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../store/taskSlice'


function TaskInput() {
    const [task, setTask] = useState('');
    const dispatch=useDispatch();

    //logic to handel input value, set '' when form is submitted
    const taskInputHandeler = (e) =>{
        e.preventDefault()
        if(task!='')
        dispatch(addTask(task))
        setTask('')
    }
  return (
    <form onSubmit={taskInputHandeler} className="space-x-3 mt-12">
        <input
            type='text'
            placeholder='Enter a task'
            value={task}
            onChange={(e)=> setTask(e.target.value)}
            className='bg-gray-800 rounded text-gray-100 py-2 px-3  '
        />
        <button 
            type='submit'
            className='text-white bg-gray-800 rounded text-gray-100 py-2 px-3  '
            >Add Task</button>
    </form>
  )
}

export default TaskInput
