import {BOOK_SELECTED} from '../constants/ActionTypes';

export function reducerSelectBook(state = null, action) {
    switch (action.type) {
        case BOOK_SELECTED:
            return action.book;

        default:
            return state;
    }

}