import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchError,
  fetchRepositories,
  fetchSeccess,
} from "./personalHomepageSlice";
import { getRepositories } from "../../api/getRepositories";
import { person } from "../../utils/person";

function* fetchData() {
  yield delay(2000);
  const { name, exclusions } = person.github;
  const response = yield call(getRepositories, name);
  const repositories = response.data.filter(
    (repo) => !exclusions.some((exclusion) => exclusion.name === repo.name)
  );
  if (response.status === 200) {
    yield put(fetchSeccess(repositories));
  } else {
    yield put(fetchError());
  }
}

function* personalHomepageSaga() {
  yield takeEvery(fetchRepositories.type, fetchData);
}

export default personalHomepageSaga;
