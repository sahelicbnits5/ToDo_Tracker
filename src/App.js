import { useState} from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
const App = () => {
  const[tasks, setTask] = useState([])
  const[showAddTask,setShowAddTask] = useState(false)

  //Delete Task
const deleteTask =  (id) =>
{
setTask(tasks.filter((task) => task.id !== id))
}

//Add Task
const addTask =  (task) =>
{
  
  setTask([tasks])

}

  return (
    <>
    <div class="outer-container">
    <div style={{width: '100%'}}>
      <div class="todo-text" style={{margin: 'auto'}}>
        todos
      </div>
    </div>
    <div style={{minHeight:'100%', backgroundColor:'blue', background: '#f5f5f5'}}>
    <div className='box'>
    <Header
    onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} 
    />
    {showAddTask && <Header onAdd={addTask}/>}
   <div style={{padding: '15px', fontSize: '24px'}}> 
   {/* <Task tasks={tasks} onDelete={deleteTask} /> */}
    
  </div>
    <Footer/>
    
    </div>
    </div>
     </div> 
    
    </>
  );
}

export default App;
