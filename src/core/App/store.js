import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../../common/Mode/themeSlice";
import personalHomepageReducer from "../../futures/personalHomepage/PersonalHomepage/personalHomepageSlice";
import createSagaMiddleware from "redux-saga";
import personalHomepageSaga from "../../futures/personalHomepage/PersonalHomepage/personalHomepageSaga";

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
