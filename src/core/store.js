import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../common/Mode/modeSlice";
import personalHomepageReducer from "../features/personalHomepage/personalHomepageSlice";
import createSagaMiddleware from "redux-saga";
import personalHomepageSaga from "../features/personalHomepage/personalHomepageSaga";

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
