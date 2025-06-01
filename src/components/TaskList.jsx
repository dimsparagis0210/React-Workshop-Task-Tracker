import './TaskList.css';
import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, onToggleComplete, onDelete}) => {
    return (
        <section className="task-list">
            {
                tasks.length === 0 ? (
                    <p>No tasks yet</p>
                ) : (
                    tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            onToggleComplete={onToggleComplete}
                            onDelete={onDelete}
                            task={task}
                        />
                    ))
                )
            }
        </section>
    )
}