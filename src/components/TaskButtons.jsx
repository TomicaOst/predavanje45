import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TaskButtons = ({
  handleShowTasksAll,
  handleShowTasksCompleted,
  handleShowTasksUncompleted,
}) => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={() => handleShowTasksAll}>
        All
      </Button>
      <Button variant="secondary" onClick={() => handleShowTasksCompleted}>
        Completed
      </Button>
      <Button variant="secondary" onClick={() => handleShowTasksUncompleted}>
        Uncompleted
      </Button>
    </ButtonGroup>
  );
};

export default TaskButtons;
