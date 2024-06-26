import { useState } from "react";
import Todoinput from "./components/Todoinput";
import TodoLists from "./components/lists";

function App() {
  const [inputs, setInputs] = useState([]);

  function addtask(newTask) {
    if (newTask.trim() !== "") {
      setInputs([...inputs, newTask]);
    } else {
      alert("enter the task");
    }

    console.log([...inputs, newTask]);
  }
  function deletetask(index) {
    const updatedTask = inputs.filter((_, i) => i != index);
    setInputs(updatedTask);
  }

  return (
    <>
      <div className="App-container">
        <div className="subapp-container">
          <Todoinput addtask={addtask} />
          <TodoLists inputs={inputs} deletetask={deletetask} />
        </div>
      </div>
    </>
  );
}

export default App;
