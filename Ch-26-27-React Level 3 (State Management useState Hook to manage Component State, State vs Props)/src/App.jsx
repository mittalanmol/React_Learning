
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  let [foodItems, setfoodItems] = useState([])

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = ""; // after entering the value the input text will become blank
      let newItems = [...foodItems, newFoodItem]; // spread operator and storing all the prev and new value
      setfoodItems(newItems) // storing the newItems in setfoodItems and then it will store in foodItems
    }
  }

  return (
    // <> This is called React Fragments. We are using this to wrap our content and to prevent the use of unnecessary node
    <Container>
      <h1 className="food-heading" >Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown} ></FoodInput>
      <ErrorMessage foodItems={foodItems} ></ErrorMessage>
      <FoodItems foodItems={foodItems} ></FoodItems>
    </Container>
  );
}

export default App
