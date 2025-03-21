import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Day1 from "./pages/Day1";
import Task1 from "./pages/Task1";
import Day2 from "./pages/Day2";
import Task2 from "./pages/Task2";
import Day3 from "./pages/Day3";
import Task3 from "./pages/Task3";
import Day4 from "./pages/Day4";
import Task4 from "./pages/Task4";
import Day5 from "./pages/Day5";
import Task5 from "./pages/Task5";
import Day6 from "./pages/Day6";
import Task6 from "./pages/Task6";
import Day7 from "./pages/Day7";
import Task7 from "./pages/Task7";
import Footer from "./components/Footer";
import Resources from "./pages/Resources";
import Explore from "./pages/Explore"

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1 h-screen overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto p-6 bg-gray-900 border-l border-gray-700">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/day1" element={<Day1 />} />
              <Route path="/day1/task" element={<Task1 />} />
              <Route path="/day2" element={<Day2 />} />
              <Route path="/day2/task" element={<Task2 />} />
              <Route path="/day3" element={<Day3 />} />
              <Route path="/day3/task" element={<Task3 />} />
              <Route path="/day4" element={<Day4 />} />
              <Route path="/day4/task" element={<Task4 />} />
              <Route path="/day5" element={<Day5 />} />
              <Route path="/day5/task" element={<Task5 />} />
              <Route path="/day6" element={<Day6 />} />
              <Route path="/day6/task" element={<Task6 />} />
              <Route path="/day7" element={<Day7 />} />
              <Route path="/day7/task" element={<Task7 />} />
              <Route path="/day/:day/resources" element={<Resources />} />
              <Route path="/explore" element={<Explore />} />

            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
