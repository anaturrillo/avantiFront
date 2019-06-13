import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import Provider from "react-redux/es/components/Provider";
import {checkUser} from "./actions/login";

const store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(checkUser());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
