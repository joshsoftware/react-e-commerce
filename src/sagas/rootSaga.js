import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import registrationSaga from "./registrationSaga";
import cartWatcherSaga from "./cartSaga";

export default function* rootSaga() {
  yield all([loginSaga(), registrationSaga(), productWatcherSaga(), cartWatcherSaga()]);
}
