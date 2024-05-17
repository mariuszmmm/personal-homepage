import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../../common/Mode/themeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
