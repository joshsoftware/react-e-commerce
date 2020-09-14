import { FOOTER_ELEMENT_LIST_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getFooterListApi } from '../apis/footerApi';
import { setFooterElementList } from '../actions/footerAction';

//worker saga
function* footerWorkerSaga() {
  console.log('josh');
  try {
    const { data } = yield call(getFooterListApi);
    console.log('products', data);
    yield put(setFooterElementList(data));
    console.log('devyani');
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* footerWatcherSaga() {
  console.log('welcome');
  yield takeLatest(FOOTER_ELEMENT_LIST_REDUCER.GET_FOOTER_ELEMENT_LIST, footerWorkerSaga);
}
