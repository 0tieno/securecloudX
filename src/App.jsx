import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedDayRoute from "./routes/ProtectedDayRoute";
import ProtectedDayResources from "./routes/ProtectedDayResources";

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
import Explore from "./pages/Explore";
import BeginnerIntro from "./pages/BeginnerIntro"; 
import Phase1 from "./pages/task3/Phase1";
import Phase2 from "./pages/task3/Phase2";
import Phase3 from "./pages/task3/Phase3";
import Phase4 from "./pages/task3/Phase4";

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
              
              <Route path="/day1" element={<ProtectedDayRoute day={1}><Day1 /></ProtectedDayRoute>} />
              <Route path="/day1/task" element={<ProtectedDayRoute day={1}><Task1 /></ProtectedDayRoute>} />

              <Route path="/day2" element={<ProtectedDayRoute day={2}><Day2 /></ProtectedDayRoute>} />
              <Route path="/day2/task" element={<ProtectedDayRoute day={2}><Task2 /></ProtectedDayRoute>} />

              <Route path="/day3" element={<ProtectedDayRoute day={3}><Day3 /></ProtectedDayRoute>} />
              <Route path="/day3/task" element={<ProtectedDayRoute day={3}><Task3 /></ProtectedDayRoute>} />
              {/* Lab 3 Phases */}
              <Route path="/day3/task/phase1" element={<ProtectedDayRoute day={3}><Phase1 /></ProtectedDayRoute>} />
              <Route path="/day3/task/phase2" element={<ProtectedDayRoute day={3}><Phase2 /></ProtectedDayRoute>} />
              <Route path="/day3/task/phase3" element={<ProtectedDayRoute day={3}><Phase3 /></ProtectedDayRoute>} />
              <Route path="/day3/task/phase4" element={<ProtectedDayRoute day={3}><Phase4 /></ProtectedDayRoute>} />

              <Route path="/day4" element={<ProtectedDayRoute day={4}><Day4 /></ProtectedDayRoute>} />
              <Route path="/day4/task" element={<ProtectedDayRoute day={4}><Task4 /></ProtectedDayRoute>} />

              <Route path="/day5" element={<ProtectedDayRoute day={5}><Day5 /></ProtectedDayRoute>} />
              <Route path="/day5/task" element={<ProtectedDayRoute day={5}><Task5 /></ProtectedDayRoute>} />

              <Route path="/day6" element={<ProtectedDayRoute day={6}><Day6 /></ProtectedDayRoute>} />
              <Route path="/day6/task" element={<ProtectedDayRoute day={6}><Task6 /></ProtectedDayRoute>} />

              <Route path="/day7" element={<ProtectedDayRoute day={7}><Day7 /></ProtectedDayRoute>} />
              <Route path="/day7/task" element={<ProtectedDayRoute day={7}><Task7 /></ProtectedDayRoute>} />

              <Route path="/day/:day/resources" element={<ProtectedDayResources />} />

              <Route path="/explore" element={<ProtectedDayRoute day={7}><Explore /></ProtectedDayRoute>} />
              
              <Route path="/start" element={<BeginnerIntro />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
