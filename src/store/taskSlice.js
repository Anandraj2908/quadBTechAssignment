import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
    tasks:[]
}

export const taskSlice = createSlice(
    {
        name:'task',
        initialState:initialState,
        reducers:{
            //reducer to add task with id and task value as text
            addTask:(state, action) => {
                const task={
                    id:nanoid(),
                    text:action.payload
                }
                state.tasks.push(task)
            },
            //reducer to delete task
            removeTask:(state, action) =>{
                state.tasks=state.tasks.filter((task) => task.id!== action.payload)
            },
            //reducer to add values to the state from the localStorage of the browser for next session
            reloadTasks:(state,action)=>{
                state.tasks=action.payload
            }
        }
    }
)

export const {addTask,removeTask,reloadTasks} = taskSlice.actions

export default taskSlice.reducer