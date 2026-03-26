import React from "react";

function TodoItem({ task, onDelete, onToggle }) {
  return (
    <div className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-6 h-6 cursor-pointer appearance-none border-2 border-indigo-200 rounded-full checked:bg-indigo-600 checked:border-transparent transition-all"
          />
          {task.completed && (
            <span className="absolute text-white text-xs pointer-events-none">
              ✓
            </span>
          )}
        </div>

        <span
          className={`text-lg transition-all duration-500 ${task.completed ? "line-through text-gray-300" : "text-gray-700 font-medium"}`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 text-2xl transition-all pr-2"
      >
        ×
      </button>
    </div>
  );
}

export default TodoItem;
