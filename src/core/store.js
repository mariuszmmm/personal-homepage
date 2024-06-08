import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../common/themeSlice";
import personalHomepageReducer from "../features/personalHomepage/personalHomepageSlice";
import createSagaMiddleware from "redux-saga";
import personalHomepageSaga from "../features/personalHomepage/personalHomepageSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    theme: themeReducer,
    personalHomepage: personalHomepageReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(personalHomepageSaga);
