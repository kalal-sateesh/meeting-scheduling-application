import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDaySelected: false,
  isTimeSelected: false,
  value: "",
  fullDayName: "",
  year: "",
  timings: "",
  name: "",
  email: "",
  isSchedule: false,
};

export const calenderSlice = createSlice({
  name: "calender",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.isDaySelected = true;
      state.value = action.payload.value;
      state.fullDayName = action.payload.formattedDate;
      state.year = action.payload.year;
    },
    toggleTime: (state, action) => {
      state.isTimeSelected = true;
      state.timings = action.payload.ele;
    },
    addNameAndEmail: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isSchedule = true;
    },
  },
});

export const { addData, toggleTime, addNameAndEmail } = calenderSlice.actions;

export default calenderSlice.reducer;
