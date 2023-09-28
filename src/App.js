import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

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

  // const handleTaskKill = (index) => {
  //   setTaskList(taskList.filter((item, i) => i !== index));
  // };

  return (
    <div>
      <h1>My Tasks</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={task} onChange={handleOnChange}></input>
        </label>
        <button>Add</button>
      </form>

      <Tasks taskList={taskList} setTaskList={setTaskList} />

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
