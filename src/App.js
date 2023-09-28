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

  const handleShowTasksAll = () => {
    setTaskList(displayTask.filter((item) => item));
  };
  const handleShowTasksCompleted = () => {
    setDispalyTask(taskList.filter((item) => item));
    setTaskList(taskList.filter((item) => item?.isCompleted === true));
  };

  const handleShowTasksUncompleted = () => {
    setDispalyTask(taskList.filter((item) => item));
    setTaskList(taskList.filter((item) => item.isCompleted === false));
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
        taskList={taskList}
        setTaskList={setTaskList}
        handleTaskKill={handleTaskKill}
        handleCheckboxChecked={handleCheckboxChecked}
        handleShowTasksAll={handleShowTasksAll}
        handleShowTasksCompleted={handleShowTasksCompleted}
        handleShowTasksUncompleted={handleShowTasksUncompleted}
      />
    </div>
  );
}

export default App;
