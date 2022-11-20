import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route to="/" element={<App></App>}></Route>
          <Route to="/home" element={<Home></Home>}></Route>
          <Route to="/about" element={<About />}></Route>

        </Routes>
      </Router>
      <Home />
      <About />
    
    </div>
  );
}
