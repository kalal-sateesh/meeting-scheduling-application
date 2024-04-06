import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../components/calenderSlice";

export const store = configureStore({
  reducer: {
    dataContainer: dataReducer,
  },
});
