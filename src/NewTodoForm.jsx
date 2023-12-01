/* eslint-disable react/prop-types */
import { useState } from "react";

export function NewTodoForm({ addItem }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevents page from reloading
    if (!newItem) return; // if newItem is empty, return
    addItem(newItem); // calls addItem from App.jsx

    setNewItem(""); // clears newItem
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} // onChange runs setNewItem whenever a key is pressed
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
