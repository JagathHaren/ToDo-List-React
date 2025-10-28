import { BrushCleaning, CirclePlus } from 'lucide-react';

const Input = ({ task, setTask, storeTask, clearAllTasks }) => {
  return (
    <>
      <div className="flex flex-col gap-3 w-full md:hidden">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Please enter your task details"
          className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition w-full"
        />
        <div className="flex gap-3 justify-between">
          <button
            title="Add Task"
            onClick={storeTask}
            className="bg-green-500 hover:bg-green-800 transition text-white px-3 py-2 rounded-md flex items-center justify-center w-full"
          >
            <CirclePlus className="w-5 h-5" />
          </button>
          <button
            title="Clear All"
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
          placeholder="Please enter your task details"
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        />
        <button
          title="Add Task"
          onClick={storeTask}
          className="flex items-center justify-center bg-green-500 hover:bg-green-800 transition text-white px-3 py-2 rounded-md "
        >
          <CirclePlus className="w-5 h-5" />
        </button>
        <button
          title="Clear All"
          onClick={clearAllTasks}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 transition text-white px-3 py-2 rounded-md "
        >
          <BrushCleaning className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default Input;
