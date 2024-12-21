import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";

function App() {
  const [view, setView] = useState("grid");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-cabernet-800">
      <Sidebar
        view={view}
        setView={setView}
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Gallery view={view} />
      </div>
    </div>
  );
}

export default App;
