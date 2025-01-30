import React, { useState } from "react";
import "./wip.css"; 

const WIPPage = () => {
  // State to manage the checklist
  const [tasks, setTasks] = useState([
    { id: 1, text: "Add rich text editor for journal entries", completed: false },
    { id: 2, text: "Implement image upload functionality", completed: false },
    { id: 3, text: "Create drawing canvas for sketches", completed: false },
    { id: 4, text: "Add tagging system for organization", completed: false },
    { id: 5, text: "Design timeline view for entries", completed: false },
  ]);

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Add a new task
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="wip-page">
      <h1>Work in Progress</h1>
      <p>Track your goals and features for your bitácora web app.</p>

      {/* Add new task form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.taskInput;
          if (input.value.trim()) {
            addTask(input.value.trim());
            input.value = "";
          }
        }}
      >
        <input
          type="text"
          name="taskInput"
          placeholder="Add a new task..."
          required
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task list */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WIPPage;