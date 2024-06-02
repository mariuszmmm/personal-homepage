import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchError,
  fetchRepositories,
  fetchSeccess,
} from "./personalHomepageSlice";
import { getRepositories } from "./personalHomepageAPI";

function* fetchRepositoriesHandler({
  payload: { username, excludedRepositories },
}) {
  try {
    yield delay(2000);
    const response = yield call(getRepositories, username);
    const repositories = response.filter(
      (repo) =>
        !excludedRepositories.some((excluded) => excluded.name === repo.name)
    );
    yield put(fetchSeccess(repositories));
  } catch {
    yield put(fetchError());
  }
}

function* personalHomepageSaga() {
  yield takeEvery(fetchRepositories.type, fetchRepositoriesHandler);
}

export default personalHomepageSaga;
