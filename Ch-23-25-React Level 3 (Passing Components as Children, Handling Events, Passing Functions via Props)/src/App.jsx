
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = []
  let foodItems = ['Dal', "Green Vegetables", "Roti", "Salad", "Milk"]

  return (
    // <> This is called React Fragments. We are using this to wrap our content and to prevent the use of unnecessary node
    <Container>
      <h1 className="food-heading" >Healthy Food</h1>
      <ErrorMessage foodItems={foodItems} ></ErrorMessage>
      <FoodItems foodItems={foodItems} ></FoodItems>
    </Container>
  );
}

export default App
