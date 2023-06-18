/* eslint-disable react/prop-types */
import { useState } from "react";

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
    <div>
      {task.map((el) => (
        <div key={el.id}>
          <ul>
            <li>
              {editedTask.id === el.id ? (
                <>
                  <input
                    placeholder="Basic usage"
                    type="text"
                    value={editedTask.name}
                    onChange={handleTaskNameChange}
                  />
                  <button onClick={handleSaveEdit}>Guardar</button>
                  <button onClick={handleCancelEdit}>Cancelar</button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={el.done}
                    onChange={() => toggleTask(el)}
                  />
                  <span>{el.name}</span>

                  <button onClick={() => dellTask(el.id)}>Dell</button>
                  <button onClick={() => handleEdit(el.id, el.name)}>
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
