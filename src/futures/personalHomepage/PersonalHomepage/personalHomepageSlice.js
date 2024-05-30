import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    state: "initial",
    repositories: [],
  },
  reducers: {
    fetchRepositories: (state) => {
      state.state = "loading";
    },
    fetchSeccess: (state, { payload: repositories }) => {
      state.state = "success";
      state.repositories = repositories;
    },
    fetchError: (state) => {
      state.state = "error";
    },
  },
});

export const { fetchRepositories, fetchSeccess, fetchError } =
  personalHomepageSlice.actions;

export const selectPersonalHomepageState = (state) => state.personalHomepage;
export const selectState = (state) => selectPersonalHomepageState(state).state;
export const selectRepositories = (state) =>
  selectPersonalHomepageState(state).repositories;

export default personalHomepageSlice.reducer;
