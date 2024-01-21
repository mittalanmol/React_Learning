import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/ToDo-Items-Store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <WelcomeMessage></WelcomeMessage>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
