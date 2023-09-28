import React from "react";

const Tasks = ({ taskList, setTaskList }) => {
  const handleTaskKill = (index) => {
    setTaskList(taskList.filter((item, i) => i !== index));
  };
  return (
    <ul>
      {taskList.map((liTask, index) => {
        return (
          <li key={index}>
            <input type="checkbox" value={liTask.isCompleted}></input>
            <span>{liTask.description}</span>
            <button onClick={() => handleTaskKill(index)}>Del</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
