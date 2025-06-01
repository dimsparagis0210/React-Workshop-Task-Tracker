import { useState, useEffect } from 'react';
import "./AddTaskForm.css";

export const AddTaskForm = (props) => {
    const [input, setInput] = useState("");

    // useEffect(() => {
    //     console.log("Input: ", input);
    // }, [input]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        props.onAddTask(input);
    }

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add a new task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="task-input"
            />
            <button className="add-btn">Add Task</button>
        </form>
    );
}