import {combineReducers} from 'redux';
import {reducerSelectBook} from './reducer_select_book';
import {reducerBooksList} from './reducer_books';

const rootReducer = combineReducers({
    books: reducerBooksList,
    bookSelected: reducerSelectBook
});

export default rootReducer;
