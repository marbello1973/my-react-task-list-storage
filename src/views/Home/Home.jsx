import { useState, useEffect } from "react";
import Task from "../../componentes/Task/Task";
import TaskList from "../../componentes/TaskList/TaskList";
import Navbar from "../../componentes/Navbar/Navbar";

//subida a la branch project-3
function Home() {
  const [newTask, setNewTask] = useState([]);

  const addTask = (name) => {
    try {
      if (!newTask.find((el) => el.name === name)) {
        setNewTask([
          ...newTask,
          {
            id: Math.random(),
            name: name,
            done: false,
          },
        ]);
      } else {
        alert("Tarea existe");
      }
    } catch (Error) {
      alert(Error);
    }
  };

  const dellTask = (id) => {
    try {
      if (newTask.find((el) => el.done)) {
        const tak = newTask.filter((el) => el.id !== id);
        setNewTask(tak);
      } else if (newTask.map((el) => el.done !== true)) {
        alert("Tarea no esta completada");
      }
    } catch (error) {
      alert(error);
    }
  };

  const editTask = (id, name) => {
    const tasks = newTask.findIndex((task) => task.id === id);
    if (tasks !== -1) {
      const updateTask = {
        ...newTask[tasks],
        name: name,
      };
      const updateTaskList = [
        ...newTask.slice(0, tasks),
        updateTask,
        ...newTask.slice(tasks + 1),
      ];
      setNewTask(updateTaskList);
    }
  };

  //para ccompletar la tarea em modo boleano
  const toggleTask = (task) => {
    setNewTask(
      newTask.map((el) =>
        el.name === task.name ? { ...el, done: !el.done } : el
      )
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("Tareas");
    if (data) setNewTask(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("Tareas", JSON.stringify(newTask));
  }, [newTask]);

  return (
    <div>
      <Navbar />
      <Task addTask={addTask} />
      <TaskList
        task={newTask}
        toggleTask={toggleTask}
        dellTask={dellTask}
        editTask={editTask}
      />
    </div>
  );
}

export default Home;
