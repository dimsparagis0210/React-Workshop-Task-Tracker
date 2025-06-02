import './TaskItem.css';

export const TaskItem = ({task, onToggleComplete, onDelete }) => {
    
    return (
        <section className={`task-item ${task.completed ? "completed" : ""}`}>
            <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            <span className='task-text'>{task.name}</span>
            <button className='delete-btn' onClick={() => onDelete(task.id)}>Delete</button>
        </section>
    )
}