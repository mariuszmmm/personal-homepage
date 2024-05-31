import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
  },
  reducers: {
    switchMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { switchMode } = themeSlice.actions;

const selectThemeState = (state) => state.mode;
export const selectMode = (state) => selectThemeState(state).mode;

export default themeSlice.reducer;
