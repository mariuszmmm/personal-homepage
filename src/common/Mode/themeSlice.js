import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
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

const selectThemeState = (state) => state.theme;
export const selectMode = (state) => selectThemeState(state).mode;

export default themeSlice.reducer;
