import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getRepositories } from "../../api/getRepositories";
import {
  fetchError,
  fetchRepositories,
  fetchSeccess,
} from "./personalHomepageSlice";

function* fetchRepositoriesHandler({ payload: { username, topic } }) {
  try {
    yield delay(2000);
    const response = yield call(getRepositories, { username, topic });
    yield put(fetchSeccess(response));
  } catch {
    yield put(fetchError());
  }
}

function* personalHomepageSaga() {
  yield takeEvery(fetchRepositories.type, fetchRepositoriesHandler);
}

export default personalHomepageSaga;
