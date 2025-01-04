import React from "react";
import Navbar from "./components/Navbar";
 
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="flex h-screen">
   
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
