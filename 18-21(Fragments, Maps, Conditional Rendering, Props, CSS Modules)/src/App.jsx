
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = []
  let foodItems = ['Dal', "Green Vegetables", "Roti", "Salad", "Milk"]

  return (
    // <> This is called React Fragments. We are using this to wrap our content and to prevent the use of unnecessary node
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage foodItems={foodItems} ></ErrorMessage>
      <FoodItems foodItems={foodItems} ></FoodItems>

    </>
  );
}

export default App
