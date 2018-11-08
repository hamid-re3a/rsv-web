import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import { store, persistor } from './redux/configureStore';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorker from './serviceWorker';


// import './index.scss';
// import reducer from './components/redux/reducer';


// const persistConfig = {
//     key: 'root',
//     storage,
//   }


const middleWare = [thunk];
middleWare.push(createLogger());


// const persistedReducer = persistReducer(persistConfig, reducer)
// var store = createStore(persistedReducer, applyMiddleware(...middleWare));
// let persistor = persistStore(store)

// store.subscribe(() => {
//     var state = store.getState();
//     console.log('state', state);
// });

// var currentState = store.getState();
// console.log('currentState', currentState);

render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
