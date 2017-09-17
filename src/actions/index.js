import {BOOK_SELECTED} from '../constants/ActionTypes';

export const selectBook = book => ({
    type: BOOK_SELECTED,
    book
});