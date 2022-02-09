import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchnumup } from "./sagas/saga.js";
import reducer from "./store/reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchnumup);


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
