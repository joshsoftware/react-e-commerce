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
import productListReducer from './reducers/productListReducer';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  combineReducers({
    loginReducer,
    registrationReducer,
    cartReducer,
    productListReducer
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
