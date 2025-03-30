import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
