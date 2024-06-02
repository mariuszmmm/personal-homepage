import { all, call } from "redux-saga/effects";
import personalHomepageSaga from "../features/personalHomepage/personalHomepageSaga";

export default function* saga() {
  yield all([call(personalHomepageSaga)]);
}
