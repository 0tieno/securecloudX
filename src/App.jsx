import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Day1 from "./pages/Day1";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/day1" element={<Day1 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
