import { useState, useEffect } from 'react';
import './TaskTracker.css';
import { AddTaskForm } from './AddTaskForm';
import { TaskList } from './TaskList';

export const TaskTracker = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log(tasks)
    }, [tasks]);

    const onToggleComplete = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        ));
    };
    const onDelete = (id) => {
        setTasks(
            tasks.filter((task) => task.id !== id)
        );
    }

    const addTask = (taskName) => {
        console.log("New task: ", taskName);
        setTasks([
            ...tasks,
            {
                name: taskName,
                completed: false,
                id: Date.now()
            }
        ])
    }

    return (
        <section className="task-tracker">
            <h1>Task Tracker</h1>
            <AddTaskForm onAddTask={addTask}/>
            <TaskList 
                tasks={tasks} 
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
            />
        </section>
    )
}