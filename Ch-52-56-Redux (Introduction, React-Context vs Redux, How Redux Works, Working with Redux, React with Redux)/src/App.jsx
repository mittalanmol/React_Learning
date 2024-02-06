import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";

import Container from "./components/Container";
import { useSelector } from "react-redux";
import PrivacyToggle from "./components/PrivacyToggle";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        {privacy ? <PrivacyToggle /> : <DisplayCounter />}
        <Controls />
      </Container>
    </center>
  );
}

export default App;
