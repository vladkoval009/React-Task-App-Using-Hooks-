//Getting an icon from react-icon. Installed via npm
import { FaTimes } from 'react-icons/fa';

function Task({ task, onDelete, onReminder }) {
    return (
        //So on double click OnReminder we will pass the ID into the func.
        //We write a expression. We keep the task class + a conditionn to call 
        //the CSS class on the border.
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onReminder(task.id)}>

        <h3>Task {task.id}: {task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color:'red'}}/></h3>
        
        </div>
    )
}

export default Task
