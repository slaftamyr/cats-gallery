import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setViewType, toggleDropdown } from "../features/viewSlice"; 
import { FaList, FaThLarge, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const dropdownOpen = useSelector((state) => state.app.dropdownOpen);  
  const viewType = useSelector((state) => state.app.viewType); 
  
  const handleViewChange = (type) => {
    dispatch(setViewType(type));  
  };

  const handleDropdownToggle = () => {
    dispatch(toggleDropdown());
  };

  return (
    <div className="bg-cabernet-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold"><i className="fas fa-cat p-4"></i>BORAT</h1>

      <button onClick={handleDropdownToggle} className="text-2xl">
        {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {dropdownOpen && (
        <div className="bg-cabernet-700 p-4 absolute top-16 right-0 w-40 rounded shadow-lg flex flex-col items-center">
          <button
            onClick={() => handleViewChange("grid")}
            className={`flex items-center bg-cabernet-600 p-2 mb-4 rounded w-full justify-center ${viewType === "grid" ? "bg-cabernet-500" : ""}`}
          >
            <FaThLarge className="text-xl" />
            <span className="ml-2">Grid</span>
          </button>

          <button
            onClick={() => handleViewChange("list")}
            className={`flex items-center bg-cabernet-600 p-2 rounded w-full justify-center ${viewType === "list" ? "bg-cabernet-500" : ""}`}
          >
            <FaList className="text-xl" />
            <span className="ml-2">List</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
