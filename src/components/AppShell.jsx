import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppShell = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex flex-1 flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto border-l border-gray-700 bg-gray-900 p-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AppShell;