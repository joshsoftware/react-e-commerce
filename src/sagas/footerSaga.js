import { FOOTER_ELEMENT_LIST_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getFooterListApi } from '../apis/footerApi';
import { setFooterElementList } from '../actions/footerAction';

//worker saga
function* footerWorkerSaga() {
  try {
    const { data } = yield call(getFooterListApi);
    yield put(setFooterElementList(data));
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* footerWatcherSaga() {
  yield takeLatest(FOOTER_ELEMENT_LIST_REDUCER.GET_FOOTER_ELEMENT_LIST, footerWorkerSaga);
}
