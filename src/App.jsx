
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <h1 className='text-3xl'>Todo List</h1>
      <TaskInput/>
      <TaskList/>
    </>
  )
}

export default App
