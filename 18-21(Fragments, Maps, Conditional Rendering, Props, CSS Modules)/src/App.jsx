import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let foodItems = []
  // let foodItems = ['Dal', "Green Vegetables", "Roti", "Salad", "Milk"]

  return (
    // <> This is called React Fragments. We are using this to wrap our content and to prevent the use of unnecessary node
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className="list-group">
        {foodItems.map((item) => {
          return <li key={item} className="list-group-item">
            {item}
          </li> // when we are using map we shoud define keys too with the values
        })}
      </ul>
    </>
  );
}

export default App
