import React from 'react';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import './App.css';
import Routes from './routes/Routes';
import loginReducer from "./reducers/LoginReducer";
import registrationReducer from "./reducers/registrationReducer";
import rootSaga from "./sagas/rootSaga";
import cartReducer from './reducers/cartReducer';
import prodcutListReducer from './reducers/productListReducer';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  combineReducers({
    loginReducer,
    registrationReducer,
    cartReducer,
    prodcutListReducer
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
