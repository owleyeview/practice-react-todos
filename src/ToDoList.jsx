/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function ToDoList({ items, toggleItem, deleteItem }) {
  return (
    <ul className="list">
      {
        /* if items array is empty, render "No items" */
        items.length === 0 && "No items"
      }
      {
        /* map over items array and render each item */
        items.map((item) => {
          return (
            <TodoItem
              {...item}
              key={item.id}
              toggleItem={toggleItem}
              deleteItem={deleteItem}
            />
          );
        })
      }
    </ul>
  );
}
