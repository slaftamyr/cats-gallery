import React from "react";

const Navbar = () => {
  return (
    <div className="bg-cabernet-900 text-white px-6 py-4 shadow-lg flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <i className="fas fa-cat text-3xl text-white hover:text-cabernet-400 transition duration-300" />
        <h1 className="text-xl font-bold">BORAT</h1>
      </div>

      <div className="flex space-x-4">
        <a
          href="https://wa.me/+249129512940"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cabernet-400 transition duration-300"
        >
          <i className="fab fa-whatsapp text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/solafa-ameer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cabernet-400 transition duration-300"
        >
          <i className="fab fa-linkedin-in text-2xl" />
        </a>
        <a
          href="https://github.com/slaftamyr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cabernet-400 transition duration-300"
        >
          <i className="fab fa-github text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
