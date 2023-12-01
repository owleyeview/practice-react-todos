import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { ToDoList } from "./ToDoList";
import { Header } from "./Header";

export default function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("ITEMS");
    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

  function addItem(newItem) {
    setItems((prevItems) => [
      ...prevItems,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]); // adds newItem to items array
  }

  function toggleItem(id, completed) {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const item = newItems.find((item) => item.id === id);
      item.completed = completed;
      return newItems;
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== id);
      return newItems;
    });
  }

  return (
    <>
      <Header />
      <NewTodoForm addItem={addItem} />
      <h1 className="list-header">Todo List</h1>
      <ToDoList items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
    </>
  );
}
