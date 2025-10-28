import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import { TodoList } from './components/TodoList';
import { v4 as uuidv4 } from "uuid"
import "./App.css"


const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  //storing data using localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const clearAllTasks = () => {
    if (tasks == "") {
      alert("No tasks present to delete");
      return
    }
    const confirmed = window.confirm("Are you sure you want to delete all tasks?");
    if (!confirmed) return;
    localStorage.removeItem('todo-tasks');
    setTasks([]);
  };


  //creating and reading of tasks
  const storeTask = () => {
    if (task.trim() == "") {
      alert("Please enter a task before clicking.")
    }
    if (task.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        text: task.trim(),
      }
      setTasks([...tasks, newTask])
      setTask("")
    }
  }

  //  delete functionality
  const deleteTask = (idToDelete) => {
    const confirm1 = window.confirm("Are you sure?");
    if(!confirm1) return;
    setTasks((preTasks) => preTasks.filter(task => task.id !== idToDelete))
  }

  //update functionality
  const updateTask = (idToUpdate, newText) => {
    setTasks(preTasks => preTasks.map(task => task.id === idToUpdate ? { ...task, text: newText } : task))
  }
  return (
    <div className="font-serif h-screen overflow-hidden bg-gray-900 text-white flex flex-col items-center px-4 py-8">
      <div className="w-full h-full max-w-5xl bg-gray-800 border-2 rounded-2xl shadow-lg p-6 flex flex-col gap-6 overflow-hidden">
        <Header />
        <Input task={task} setTask={setTask} storeTask={storeTask} clearAllTasks={clearAllTasks} />
        <TodoList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    </div>

  );
};

export default App;
