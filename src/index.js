import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';


const initialState = {
    books: [
        {title: 'JavaScript Learn', pages: 101},
        {title: 'Harry Potter', pages: 222},
        {title: 'The Dark Tower', pages: 144},
        {title: 'Eloquent Ruby', pages: 10}
    ],
    bookSelected: null
};
const store = createStore(reducers,initialState);
// store.subscribe(()=> console.log(store.getState()));
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//<Provider store={createStoreWithMiddleware(reducers)}>
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('.container'));
