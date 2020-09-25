import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import loginOAuthSaga from './loginOAuthSaga';
import cartWatcherSaga from './cartSaga';
import productWatcherSaga from './productSaga';
import footerWatcherSaga from './footerSaga';
import userprofileWatcherSaga from './userprofileSaga';
import userprofileupdateWatcherSaga from './userprofileupdateSaga';
import addProductSaga from './addProductSaga';
import updateProductSaga from './updateProductSaga';
import searchbarSaga from './searchbarSaga';
import userWatcherSaga from './userSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    loginOAuthSaga(),
    cartWatcherSaga(),
    productWatcherSaga(),
    footerWatcherSaga(),
    userprofileWatcherSaga(),
    userprofileupdateWatcherSaga(),
    addProductSaga(),
    updateProductSaga(),
    searchbarSaga(),
    userWatcherSaga()
  ]);
}
