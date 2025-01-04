import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/viewSlice";  

const store = configureStore({
  reducer: {
    app: appReducer, 
  },
});

export default store;
