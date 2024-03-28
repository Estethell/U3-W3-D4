import { Nav } from "react-bootstrap";
import "./App.css";
import NavBar from "./Components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
