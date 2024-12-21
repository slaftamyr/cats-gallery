import React, { useState, useEffect } from "react";

const Gallery = ({ view, sidebarOpen }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=8&page=${page}&api_key=live_NuHaGSIxY60ZgI86BPvCcBN1bi82nEfZbgzBh29PA5nWqiW5ajwjm0CBBc1jvvw3`
      );
      if (!response.ok) throw new Error("Failed to fetch images");
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className={`flex-1 p-4 bg-white min-h-screen ${
        sidebarOpen ? "ml-0" : ""
      } transition-all duration-300`}
    >
      {loading ? (
        <div className="text-center text-cabernet-800">Loading...</div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="bg-cabernet-100 shadow-md rounded p-4">
              <img
                src={img.url}
                alt="Cat"
                className="rounded w-full h-32 sm:h-40 lg:h-48 object-cover cursor-pointer"
                onClick={() => handleImageClick(img.url)}
              />
              <p className="mt-2 text-center text-cabernet-900 font-semibold">
                Cute Cat
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex bg-cabernet-100 shadow-md rounded p-4"
            >
              <img
                src={img.url}
                alt="Cat"
                className="w-1/3 rounded object-cover h-32 sm:h-40 lg:h-48 cursor-pointer"
                onClick={() => handleImageClick(img.url)}
              />
              <div className="ml-4">
                <h2 className="text-lg font-bold text-cabernet-900">
                  Cute Cat
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on background click
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Cat"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-cabernet-800 p-2 rounded hover:bg-cabernet-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-4 items-center">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded flex items-center ${
            page === 1
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-cabernet-700 text-white hover:bg-cabernet-600"
          }`}
        >
          <i className="fas fa-chevron-left" />
        </button>
        <span className="text-cabernet-800 font-semibold">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-cabernet-700 text-white px-4 py-2 rounded hover:bg-cabernet-600 flex items-center"
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
