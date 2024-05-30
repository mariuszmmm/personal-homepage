import { all, call } from "redux-saga/effects";
import personalHomepageSaga from "../../futures/personalHomepage/PersonalHomepage/personalHomepageSaga";

export default function* saga() {
  yield all([call(personalHomepageSaga)]);
}
