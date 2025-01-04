import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImages, setLoading, setPage, setSelectedImage, clearSelectedImage } from "../features/viewSlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { viewType, images, page, loading, selectedImage } = useSelector((state) => state.app); // الوصول إلى الحالة من appSlice

  const fetchImages = async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=8&page=${page}&api_key=live_NuHaGSIxY60ZgI86BPvCcBN1bi82nEfZbgzBh29PA5nWqiW5ajwjm0CBBc1jvvw3`
      );
      const data = await response.json();
      dispatch(setImages(data));  
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      dispatch(setLoading(false));  
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page, dispatch]);

  const handleImageClick = (url) => {
    dispatch(setSelectedImage(url)); 
  };

  const closeModal = () => {
    dispatch(clearSelectedImage());  
  };

  return (
    <div className="flex-1 p-4 bg-white min-h-screen">
      {loading ? (
        <div className="text-center text-cabernet-800">Loading...</div>
      ) : viewType === "grid" ? ( 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="bg-cabernet-100 shadow-md rounded p-4">
              <img
                src={img.url}
                alt="Cat"
                className="rounded w-full h-32 sm:h-40 lg:h-48 object-cover cursor-pointer"
                onClick={() => handleImageClick(img.url)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {images.map((img, idx) => (
            <div key={idx} className="flex bg-cabernet-100 shadow-md rounded p-4">
              <img
                src={img.url}
                alt="Cat"
                className="w-1/3 rounded object-cover h-32 sm:h-40 lg:h-48 cursor-pointer"
                onClick={() => handleImageClick(img.url)}
              />
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
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
          onClick={() => dispatch(setPage(page > 1 ? page - 1 : 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${
            page === 1
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-cabernet-700 text-white hover:bg-cabernet-600"
          }`}
        >
          Previous
        </button>
        <span className="text-cabernet-800 font-semibold">Page {page}</span>
        <button
          onClick={() => dispatch(setPage(page + 1))}
          className="bg-cabernet-700 text-white px-4 py-2 rounded hover:bg-cabernet-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
