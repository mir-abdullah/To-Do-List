import React from "react";

export const Task = (props) => {
  return (
    <div className="task">
      <div
        className="display-task"
        style={{
          textDecoration: props.completed ? "line-through" : "none",
          backgroundColor: props.completed ? "lawngreen" : "white",
        }}
      >
        {props.taskName}
      </div>

      {!props.completed && <button className="edit-button" onClick={() => props.editTask(props.id, props.taskName)}>
        Edit
      </button>}
      <button
        className="delete-button"
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        Delete
      </button>
      <button
        className="complete-button"
        onClick={() => props.completeTask(props.id)}
      >
        Completed
      </button>
    </div>
  );
};
