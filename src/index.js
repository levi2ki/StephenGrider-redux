import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';


const initialState = {
    books: [
        {title: 'JavaScript Learn'},
        {title: 'Harry Potter'},
        {title: 'The Dark Tower'},
        {title: 'Eloquent Ruby'}
    ],
    bookSelected: null
};
const store = createStore(reducers,initialState);
store.subscribe(()=> console.log(store.getState()));
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//<Provider store={createStoreWithMiddleware(reducers)}>
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('.container'));
