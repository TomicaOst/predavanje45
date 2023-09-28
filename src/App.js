import React, { useState } from "react";
import "./App.css";
import { Tasks, TaskButtons } from "./components";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTaskList((prevState) => [
      ...prevState,
      { isCompleted: false, description: task },
    ]);
    setTask("");
  };

  const handleTaskKill = (index) => {
    setTaskList(taskList.filter((item, i) => i !== index));
  };

  const handleCheckboxChecked = (index) => {
    setTaskList(
      taskList.map((item, i) =>
        i === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleShowTasksAll = (event) => {
    setTaskList(taskList.filter((item) => item));
  };
  const handleShowTasksCompleted = (event) => {
    setTaskList(taskList.filter((item) => (item.isCompleted ? item : null)));
  };

  const handleShowTasksUncompleted = (event) => {
    setTaskList(taskList.filter((item) => (item.isCompleted ? null : true)));
  };

  return (
    <div>
      <h1>My Tasks</h1>
      {/* <TaskButtons
        handleShowTasksAll={handleShowTasksAll}
        handleShowTasksCompleted={handleShowTasksCompleted}
        handleShowTasksUncompleted={handleShowTasksUncompleted}
      /> */}
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={task} onChange={handleOnChange}></input>
        </label>
        <button>Add</button>
      </form>

      <Tasks
        taskList={taskList}
        setTaskList={setTaskList}
        handleTaskKill={handleTaskKill}
        handleCheckboxChecked={handleCheckboxChecked}
      />
      {console.log(taskList)}
      {/* <ul>
        {taskList.map((liTask, index) => {
          return (
            <li key={index}>
              <input type="checkbox" value={liTask.isCompleted}></input>
              <span>{liTask.description}</span>
              <button onClick={() => handleTaskKill(index)}>Del</button>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
