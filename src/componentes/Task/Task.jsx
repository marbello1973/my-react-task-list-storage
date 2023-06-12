/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Task.module.css";

function Task({ addTask }) {
  const [tasks, setTasks] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    addTask(tasks);
    setTasks("");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmit}>
        <input
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          type="text"
          placeholder="add task"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Task;
