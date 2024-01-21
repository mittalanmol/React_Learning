import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/ToDo-Items-Store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currVal) => {
      // we are passing the currval instead of todoItems
      const newTodoItems = [
        ...currVal,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };
  // Functional Updates: Use to avoid stale values during asynchronous updates.

  const deleteItem = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    // agar name ke equal nhi hai to usse store krlo newTodoItems main and delete mt kro as it is filtering out. And if equal hai to delete
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider // Context Provider
      value={{
        // passing the values as an object so we can pass as many at a time
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <WelcomeMessage></WelcomeMessage>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
