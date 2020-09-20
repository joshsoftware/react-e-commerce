import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './App.css';
import Routes from './routes/Routes';
import rootSaga from './sagas/rootSaga';
import loginReducer from './reducers/LoginReducer';
import registrationReducer from './reducers/registrationReducer';
import cartReducer from './reducers/cartReducer';
import footerElementListReducer from './reducers/footerReducer';
import productListReducer from './reducers/productListReducer';
import userprofileReducer from './reducers/userprofileReducer';
import userprofileupdateReducer from './reducers/userprofileupdateReducer';
import addProductReducer from './reducers/addProductReducer';
import updateProductReducer from './reducers/updateProductReducer';
import searbarReducer from './reducers/searchbarReducer';
import alertReducer from './reducers/alertReducer';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  combineReducers({
    loginReducer,
    registrationReducer,
    cartReducer,
    searbarReducer,
    productListReducer,
    footerElementListReducer,
    userprofileReducer,
    userprofileupdateReducer,
    addProductReducer,
    updateProductReducer,
    alertReducer
  }),
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
