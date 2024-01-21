import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { TodoItemsContext } from "../store/ToDo-Items-Store";

function ToDoItems() {
  const { todoItems } = useContext(TodoItemsContext); // here we are destructuring  the object

  /* Traditional way of accesing element of object

const contextObj = useContext(TodoItemsContext);
const todoItems = contextObj.todoItems;
*/
  return (
    <div className="itemContainer">
      {todoItems.map((item) => {
        return (
          <ToDoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></ToDoItem>
        );
      })}
    </div>
  );
}

export default ToDoItems;
