import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewType: "grid", 
  dropdownOpen: false, 
  images: [],
  page: 1,  
  loading: false,  
  selectedImage: null,  
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
} = appSlice.actions;

 
export default appSlice.reducer;
