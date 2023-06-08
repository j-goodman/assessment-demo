import './App.css';
import Home from "./components/Home"
import Nav from "./components/Nav"
import Episodes from "./components/Episodes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/characters" element={<div>Characters Page</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
