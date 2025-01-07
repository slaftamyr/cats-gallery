import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewType: "grid",  
  dropdownOpen: false, 
  images: [],
  page: 1, 
  loading: false, 
  selectedImage: null,  
  imageType: "cat", 
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setViewType: (state, action) => {
      state.viewType = action.payload;
    },
    toggleDropdown: (state) => {
      state.dropdownOpen = !state.dropdownOpen;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    clearSelectedImage: (state) => {
      state.selectedImage = null;
    },
    setImageType: (state, action) => {
      state.imageType = action.payload;  
    },
  },
});

export const {
  setViewType,
  toggleDropdown,
  setImages,
  setLoading,
  setPage,
  setSelectedImage,
  clearSelectedImage,
  setImageType,
} = appSlice.actions;

export default appSlice.reducer;
