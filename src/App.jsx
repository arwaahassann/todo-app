import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-[2rem] shadow-2xl p-10 border border-white">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
            Focus List 🚀
          </h1>
          <p className="text-gray-500 font-medium">
            Keep track of your daily goals
          </p>
        </header>

        <TodoInput onAdd={addTask} />

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          ))}
        </div>

        {tasks.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold text-indigo-400">
            <span>{tasks.filter((t) => !t.completed).length} items left</span>
            <span>
              {Math.round(
                (tasks.filter((t) => t.completed).length / tasks.length) * 100,
              )}
              % done
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
