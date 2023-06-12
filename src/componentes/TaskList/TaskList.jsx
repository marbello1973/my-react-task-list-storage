/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./TaskList.module.css";

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
        <div key={el.id} className={styles.task}>
          <ul>
            <li className={el.done ? styles.subrayado : ""}>
              {editedTask.id === el.id ? (
                <>
                  <input
                    className={styles.inputEdit}
                    type="text"
                    value={editedTask.name}
                    onChange={handleTaskNameChange}
                  />
                  <button className={styles.buttonG} onClick={handleSaveEdit}>
                    Guardar
                  </button>
                  <button className={styles.buttonC} onClick={handleCancelEdit}>
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={el.done}
                    onChange={() => toggleTask(el)}
                  />
                  <span className={styles.span}>{el.name}</span>

                  <button
                    className={styles.buttonC}
                    onClick={() => dellTask(el.id)}
                  >
                    Dell
                  </button>
                  <button
                    className={styles.buttonG}
                    onClick={() => handleEdit(el.id, el.name)}
                  >
                    Edit
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

/*
return (
    <div>
      {task.map((el) => (
        <div key={el.name}>
          <ul>
            <li className={el.done ? styles.subrayado : ""}>
              <>
                <input
                  type="checkbox"
                  checked={el.done}
                  onChange={() => toggleTask(el)}
                />
                {el.name}
                <button onClick={() => dellTask(el.id)}>eliminar</button>
                <button onClick={() => editTask(el.id)}>Editar</button>
              </>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );

*/
