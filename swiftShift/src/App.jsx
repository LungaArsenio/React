import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      {/* Describing the components */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Features" element={<Features />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
