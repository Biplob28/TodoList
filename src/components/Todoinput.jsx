import { useState } from "react";

function Todoinput({ addtask }) {
  const [newTask, setNewTask] = useState("");
  function inputhandler(event) {
    setNewTask(event.target.value);
    console.log(event.target.value);
  }

  function handleAddtask() {
    addtask(newTask);
    setNewTask("");
  }

  return (
    <div className="main-section">
      <h2>TODO LIST</h2>
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          placeholder="Enter the task"
          onChange={inputhandler}
        />
        <button className="addbtn" onClick={handleAddtask}>
          {" "}
          Add
        </button>
      </div>
    </div>
  );
}
export default Todoinput;
