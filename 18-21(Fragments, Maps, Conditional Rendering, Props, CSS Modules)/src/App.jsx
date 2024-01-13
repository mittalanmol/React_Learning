import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    // <> This is called React Fragments. We are using this to wrap our content and to prevent the use of unnecessary node
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </>
  )
}

export default App
