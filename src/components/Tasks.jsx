import React from "react";

const Tasks = ({ taskList, handleTaskKill, handleCheckboxChecked }) => {
  return (
    <ul>
      {taskList.map((liTask, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              checked={liTask.isCompleted}
              onChange={() => handleCheckboxChecked(index)}
            ></input>
            <span>{liTask.description}</span>
            <button onClick={() => handleTaskKill(index)}>Del</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
