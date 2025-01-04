import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    sidebarOpen: false,
    viewType: "grid", // "list" أو "grid"
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setViewType: (state, action) => {
      state.viewType = action.payload;
    },
  },
});

export const { toggleSidebar, setViewType } = viewSlice.actions;

export default viewSlice.reducer;
