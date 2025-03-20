import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Day1 from "./pages/Day1";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <Header />

          {/* Page Content */}
          <div className="flex-1 p-6 bg-gray-900 border-l border-gray-700">
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
