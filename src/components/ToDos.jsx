import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { SquarePen } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Upload } from 'lucide-react';




const ToDos = ({ task, deleteTask, updateTask }) => {
  const [line, setLine] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [showModal, setShowModal] = useState(false);     // Controls modal visibility
  const [animateOut, setAnimateOut] = useState(false);   // Triggers exit animation

  const openModal = () => {
    setShowModal(true);
    setAnimateOut(false);
  };

  const closeModal = () => {
    setAnimateOut(true);
    setTimeout(() => setShowModal(false), 300); // Wait for exit animation
  };

  const handleUpdate = () => {
    updateTask(task.id, editText);
    closeModal();
  };

  return (
    <>
      {/* Task Row */}
      <div className="bg-gray-700 px-4 py-3 rounded-md flex justify-between items-center shadow-sm hover:shadow-md transition group relative z-10">
        <div className="flex items-center gap-3 w-full">
          <input
            type="checkbox"
            onClick={() => setLine(!line)}
            className="w-5 h-5 accent-indigo-500 cursor-pointer rounded-md transition duration-150"
          />
          <div
            className={`flex-1 whitespace-pre-wrap break-words overflow-auto max-w-full ${line ? 'line-through decoration-red-500 decoration-2 text-gray-400' : ''
              }`}
          >
            {task.text}
          </div>
          <div className="flex gap-3 ml-3">
            <button
              onClick={openModal}
              className="text-blue-400 hover:text-blue-600 text-sm hover:cursor-pointer hover:scale-110"
            >
              {
                !line && <SquarePen />
              }
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-400 hover:text-red-600 text-sm hover:cursor-pointer hover:scale-110"
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-xl flex items-center justify-center z-50 text-white">
          <div
            className={`bg-gray-800 p-6 rounded-xl shadow-2xl sm:w-96 w-80  transform transition-all duration-300
              ${animateOut ? 'fade-Out' : 'fade-In'}`}
          >
            <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
            <TextareaAutosize
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 outline-none text-black bg-white"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm text-gray-50 bg-gray-400 rounded hover:bg-gray-300 hover:text-black transition duration-150 hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer"
              >
                <Upload />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToDos;
