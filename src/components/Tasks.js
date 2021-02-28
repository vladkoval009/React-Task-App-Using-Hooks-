import Task from './Task'


function Tasks(props) {

    return (
        <div>
        {props.tasksArray.map((task) => (
            <Task key={task.id} 
            task={task} 
            onDelete={props.onDelete}
            onReminder={props.onReminder}
            />
        ))}
        </div>
    )
}

export default Tasks
   