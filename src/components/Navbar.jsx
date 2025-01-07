import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setViewType, toggleDropdown, setImageType } from "../features/viewSlice";
import { FaList, FaThLarge, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const dropdownOpen = useSelector((state) => state.app.dropdownOpen);
  const viewType = useSelector((state) => state.app.viewType);
  const imageType = useSelector((state) => state.app.imageType);

  const toggleImageType = () => {
    const newType = imageType === "cat" ? "dog" : "cat";
    dispatch(setImageType(newType));
  };
  const handleViewChange = (type) => {
    dispatch(setViewType(type));
  };

  const handleDropdownToggle = () => {
    dispatch(toggleDropdown());
  };

  return (
    <div className="bg-cabernet-800 text-white p-4 flex justify-between items-center relative">
      <h1 className="text-xl font-bold"><i className=" fas fa-paw"></i> Animals</h1>
      <div className="flex items-center">
  <span className="mr-2"><i className=" fas fa-cat"></i> </span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={imageType === "dog"}
      onChange={toggleImageType}
      className="sr-only peer"
    />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-cabernet-700"></div>
    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 transform peer-checked:translate-x-5"></div>
  </label>
  <span className="mr-2"><i className=" fas fa-dog"></i> </span>
</div>

      <button
        onClick={handleDropdownToggle}
        className="text-white text-2xl flex items-center"
      >
        {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {dropdownOpen && (
        <div className="absolute top-16 right-0 bg-white text-cabernet-800 rounded shadow-lg py-2 w-48">
          <button
            onClick={() => handleViewChange("grid")}
            className={`flex items-center w-full px-4 py-2 text-left hover:bg-cabernet-200 ${
              viewType === "grid" ? "font-bold" : ""
            }`}
          >
            <FaThLarge className="mr-2" />
            Grid View
          </button>
          <button
            onClick={() => handleViewChange("list")}
            className={`flex items-center w-full px-4 py-2 text-left hover:bg-cabernet-200 ${
              viewType === "list" ? "font-bold" : ""
            }`}
          >
            <FaList className="mr-2" />
            List View
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
