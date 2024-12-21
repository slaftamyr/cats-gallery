import React from "react";

const Sidebar = ({
  view,
  setView,
  sidebarOpen,

  toggleSidebar,
}) => {
  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-cabernet-800 text-white flex flex-col ${
        view === "grid" ? "h-[100%]" : "h-[2000px]"
      }
      }  
 p-4 transition-all duration-300 overflow-y-auto`}
    >
      <button
        onClick={toggleSidebar}
        className="mb-4 bg-cabernet-700 text-white p-2 rounded hover:bg-cabernet-600 flex justify-center items-center"
      >
        <i
          className={`fas ${
            sidebarOpen ? "fa-chevron-left" : "fa-chevron-right"
          }`}
        />
      </button>
      {sidebarOpen && (
        <>
          <button
            onClick={() => {
              setView("grid");
              toggleSidebar();
            }}
            className="mb-4 bg-cabernet-700 text-white p-2 rounded hover:bg-cabernet-600 flex justify-center items-center"
          >
            <i className="fas fa-th" /> <span className="ml-2">Grid View</span>
          </button>
          <button
            onClick={() => {
              setView("list");
              toggleSidebar();
            }}
            className="bg-cabernet-700 text-white p-2 rounded hover:bg-cabernet-600 flex justify-center items-center"
          >
            <i className="fas fa-list" />{" "}
            <span className="ml-2">List View</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
