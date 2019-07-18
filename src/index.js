import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer'
import createSagaMiddleware from 'redux-saga';

import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";


//Tu importuje watcher [SAGA]
import { watchAgeUp } from "./sagas/saga";


const rootReducer = combineReducers({
    rA: reducerA,
    rB: reducerB,
    r: reducer
})

// Tworze nowa sage, raz globalnie [SAGA]
const sagaMiddleware = createSagaMiddleware();

// tworze stora implementujac middleware sage [SAGA]
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//Uruchamiam sage z danym watcherem [SAGA]
sagaMiddleware.run(watchAgeUp);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
