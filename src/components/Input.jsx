import { BrushCleaning, CirclePlus } from 'lucide-react';

const Input = ({ task, setTask, storeTask, clearAllTasks }) => {
  return (
    <>
      {/* Small devices (stacked) */}
      <div className="flex flex-col gap-3 w-full md:hidden">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full"
        />
        <div className="flex gap-3 justify-between">
          <button
            title="Add task"
            onClick={storeTask}
            className="bg-indigo-500 hover:bg-indigo-800 transition text-white px-3 py-2 rounded-md flex items-center justify-center w-full"
          >
            <CirclePlus className="w-5 h-5" />
          </button>
          <button
            title="Clear all tasks"
            onClick={clearAllTasks}
            className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-2 rounded-md flex items-center justify-center w-full"
          >
            <BrushCleaning className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Medium and up (horizontal layout) */}
      <div className="hidden md:flex gap-2 items-center w-full">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
        <button
          title="Add task"
          onClick={storeTask}
          className="bg-indigo-500 hover:bg-indigo-800 transition text-white px-3 py-2 rounded-md flex items-center justify-center"
        >
          <CirclePlus className="w-5 h-5" />
        </button>
        <button
          title="Clear all tasks"
          onClick={clearAllTasks}
          className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-2 rounded-md flex items-center justify-center"
        >
          <BrushCleaning className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default Input;
