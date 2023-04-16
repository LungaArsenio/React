import Nav from "./components/Nav";
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
          {/* <Route path="/Features" element={<Features />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Contact" element={<Contact />}></Route> */}
        </Routes>
        {/* Heading */}
        {/* Huge Image */}
        {/* Trusted by */}
        {/* features */}
        {/* pricing */}
        {/* Card */}
        {/* Whats new */}
        {/* Footer */}
      </Router>
    </div>
  );
}

export default App;
