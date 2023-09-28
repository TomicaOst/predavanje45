import React, { useState } from "react";
import "./App.css";
import { Tasks, TaskButtons } from "./components";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [displayTask, setDispalyTask] = useState([]);

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTaskList((prevState) => [
      ...prevState,
      { isCompleted: false, description: task },
    ]);
    setDispalyTask((prevState) => [
      ...prevState,
      { isCompleted: false, description: task },
    ]);
    setTask("");
  };

  const handleTaskKill = (index) => {
    setTaskList(taskList.filter((item, i) => i !== index));
    setDispalyTask(displayTask.filter((item, i) => i !== index));
  };

  const handleCheckboxChecked = (index) => {
    setTaskList(
      taskList.map((item, i) =>
        i === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
    setDispalyTask(
      displayTask.map((item, i) =>
        i === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleShowTasksAll = () => {
    setDispalyTask(taskList.filter((item) => item));
  };
  const handleShowTasksCompleted = () => {
    setDispalyTask(taskList.filter((item) => item.isCompleted === true));
    // setTaskList(taskList.filter((item) => item.isCompleted === true));
  };

  const handleShowTasksUncompleted = () => {
    setDispalyTask(taskList.filter((item) => item.isCompleted === false));
    // setTaskList(taskList.filter((item) => item.isCompleted === false));
  };

  return (
    <div>
      <h1>My Tasks</h1>
      <TaskButtons
        handleShowTasksAll={handleShowTasksAll}
        handleShowTasksCompleted={handleShowTasksCompleted}
        handleShowTasksUncompleted={handleShowTasksUncompleted}
      />
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={task} onChange={handleOnChange}></input>
        </label>
        <button>Add</button>
      </form>

      <Tasks
        displayTask={displayTask}
        handleTaskKill={handleTaskKill}
        handleCheckboxChecked={handleCheckboxChecked}
      />
    </div>
  );
}

export default App;
