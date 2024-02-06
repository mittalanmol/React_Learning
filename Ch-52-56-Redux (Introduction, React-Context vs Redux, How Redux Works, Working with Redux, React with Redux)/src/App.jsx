import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";

import Container from "./components/Container";

function App() {
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>

        <DisplayCounter />
        <Controls />
      </Container>
    </center>
  );
}

export default App;
