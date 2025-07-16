// TodoList.jsx
import React from 'react';
import ToDos from './ToDos';

export const TodoList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="max-h-96 w-full overflow-y-auto pr-2 custom-scroll scroll-smooth flex flex-col gap-3">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 mt-4">No tasks yet.</p>
      ) : (
        tasks.slice().reverse().map((task) => (
          <ToDos
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      )}
    </div>
  );
};
