import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import "./App.css"
import ToDoItems from "./components/ToDoItems"
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"


function App() {

  

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName,itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate, }
    ]
    setTodoItems(newTodoItems)
  }

  const handleDeleteClick = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName)
    // agar name ke equal nhi hai to usse store krlo newTodoItems main and delete mt kro as it is filtering out. And if equal hai to delete  
    setTodoItems(newTodoItems)
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem={handleNewItem} ></AddToDo>
      { todoItems.length===0 && <WelcomeMessage></WelcomeMessage>} 
      <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteClick} ></ToDoItems>

    </center>
  )

}

export default App
