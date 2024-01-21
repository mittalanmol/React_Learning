import React, { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import ToDoItem from "./ToDoItem";
import { TodoItemsContext } from "../store/ToDo-Items-Store";

function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemsContext); // it is must to declare it inside {} kind of destructuring it
  return (
    todoItems.length === 0 && <p className={styles.message}>Enjoy your day</p>
  );
}

// if there is no todo item , it will display
export default WelcomeMessage;
