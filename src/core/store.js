import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../common/Mode/modeSlice";
import personalHomepageReducer from "../futures/personalHomepage/personalHomepageSlice";
import createSagaMiddleware from "redux-saga";
import personalHomepageSaga from "../futures/personalHomepage/personalHomepageSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    mode: modeReducer,
    personalHomepage: personalHomepageReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(personalHomepageSaga);
