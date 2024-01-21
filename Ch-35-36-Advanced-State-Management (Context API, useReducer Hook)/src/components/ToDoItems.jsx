import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="itemContainer">
      {todoItems.map((item) => {
        return (
          <ToDoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          ></ToDoItem>
        );
      })}
    </div>
  );
}

export default ToDoItems;
