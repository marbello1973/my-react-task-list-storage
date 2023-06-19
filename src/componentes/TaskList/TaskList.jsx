/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { MdCancelPresentation, MdSaveAlt } from "react-icons/md";
import styles from "./TaskList.module.css";

//BsSave
//IoSaveOutline
//MdCancelPresentation

function TaskList({ task, toggleTask, dellTask, editTask }) {
  const [editedTask, setEditedTask] = useState({ id: null, name: "" });

  const handleEdit = (taskId, taskName) => {
    setEditedTask({ id: taskId, name: taskName });
  };

  const handleSaveEdit = () => {
    editTask(editedTask.id, editedTask.name);
    setEditedTask({ id: null, name: "" });
  };

  const handleCancelEdit = () => {
    setEditedTask({ id: null, name: "" });
  };

  const handleTaskNameChange = (event) => {
    setEditedTask({ ...editedTask, name: event.target.value });
  };

  return (
    <div className={styles.container}>
      {task.map((el) => (
        <div key={el.id}>
          <ul>
            <li>
              {editedTask.id === el.id ? (
                <div className={styles.containerInputUno}>
                  <input
                    placeholder="Basic usage"
                    type="text"
                    value={editedTask.name}
                    onChange={handleTaskNameChange}
                  />

                  <button onClick={handleSaveEdit}>
                    <MdSaveAlt className={styles.butonSave} />
                  </button>
                  <button onClick={handleCancelEdit}>
                    <MdCancelPresentation className={styles.butonCancel} />
                  </button>
                </div>
              ) : (
                <div className={styles.containerInputDos}>
                  <input
                    type="checkbox"
                    checked={el.done}
                    onChange={() => toggleTask(el)}
                  />
                  <span>{el.name}</span>

                  <button
                    className={styles.buttonDell}
                    onClick={() => dellTask(el.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <button onClick={() => handleEdit(el.id, el.name)}>
                    <RiPencilLine />
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
//RiDeleteBin6Line
