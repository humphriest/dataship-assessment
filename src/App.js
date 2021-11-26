import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [newValue, setValue] = useState("");

  const updateText = (event) => {
    setValue(event.target.value);
  };

  const addToList = () => {
    let newList = [...list];
    const newTask = { name: newValue, done: false };
    newList.push(newTask);
    setList(newList);
    setValue("");
  };

  const removeItem = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const toggleCheckbox = (index) => {
    let newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  };

  return (
    <div className="App">
      <div className="container">
        <input
          onChange={updateText}
          placeholder="add"
          value={newValue}
          id="input"
          aria-label="input"
        />
        <button onClick={addToList}>Add to list</button>
        <ul>
          {list.map((listItem, i) => (
            <li className="listItem" key={i}>
              <input
                type="checkbox"
                onChange={() => toggleCheckbox(i)}
                value={listItem.done}
              />
              <div role="definition">{listItem.name}</div>
              <button aria-label="delete" onClick={() => removeItem(i)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
