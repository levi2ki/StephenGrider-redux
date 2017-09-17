import {combineReducers} from 'redux';
import {reducerBooks} from './reducer_books';

const reducerBooksList = (state = []) => {
  return state;
};

const rootReducer = combineReducers({
    books: reducerBooksList,
    bookSelected: reducerBooks
});

export default rootReducer;
