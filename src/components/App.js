import './App.css';
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
//Using HOOKS: useState to change diff. states onClick etc.
//Using HOOKS: useEffect to fetch data from db.json
import { useState, useEffect } from 'react';

function App() {

    //This state allows to show the form when I click a button.
    //I wrap the <Task /> into {} and add and ternaly/if statement.
     const [showAddTask, setShowAddTask] = useState('false')

    
    //Here I use the state on taskArray.
    // 1) tasksArray is a piece of state 'default'. 
    // 2) setTasks is a function to change the state.

    //Leaving it as an empty array. the data comes from db.json file.
    const [tasksArray, setTasks] = useState([])

    //Mock BACKEND
    //Using useEffect to fetch data.

    useEffect(() => {
      
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      

      //Calling the above fetch func. 
      getTasks()
      
      //Emplty array means dependencies. at the moment there are none. so
      //the array is empty
    }, [])

    //Fetching the data 
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:3000/tasksArray')
      //ITS IMPORTANT TO AWAIT
      const data = await res.json()

      return data

    }
      

//Here I create all logic to delete & add the tasks. 
//We deal with the tasks by using setTask from the state  HOOK.

//Add Task WITHOUT BACKEND.
// function addTask(task) {
  
//   const id = Math.floor(Math.random() * 10000) + 1
  
//   const newTask = { id, ...task }
//   setTasks([...tasksArray, newTask])
// }

  //Add task WITH BACKEND: JSON Server (see db.json).
  //We don't need ID because it will be generated automaticaly.
const addTask = async (task) => {
  const res = await fetch(`http://localhost:3000/tasksArray`, {
    method: 'POST',
    headers: {
    'Content-type': 'application/json'
    },
    body: JSON.stringify(task),
  })
  //ITS IMPORTANT TO AWAIT
  const data = await res.json()

  setTasks([...tasksArray, data])
}

  //Delete method. 
  //This method will be passed down as a prop to
  //Tasks.js then Task.js then we call an anonomys function 
  //on the onClick event.
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasksArray/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasksArray.filter((task) => task.id !== id))
  }

  //Toggling Reminder. Mapping over the taskArray, each obj.(task) we 
  //compare as ternary (conditional) operator where task.id is equal to id passed 
  //into the function. If true: ...task(this means we accesign(spread) all the properties/values of the obj.
  // and after the coma I tell what property I want to change: !task.reminder) 
  // reminder: !task.reminder If not true: task which means - no change.
  //This func. sets the reminder to the opposite state.
  function toggleReminder(id) {
    setTasks(tasksArray.map((task) => task.id === id ? {
      ...task, reminder: !task.reminder } : task
    
      )     
    )
  }


  return (
    <div className="container">
      
      <Header title='Task App'
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks 
      tasksArray={tasksArray} 
      onDelete={deleteTask}
      onReminder={toggleReminder}
      />
    </div>
  );
}

export default App;
