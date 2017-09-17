import React from 'react';
import { connect } from 'react-redux';

import BookList from '../../components/BooksList'


const mapStateToProps = state => {
    /**
     * @function that connects return connected piece of redux state to view component
     * @arg {Object} state Redux state
     * @return {Object} new state
     * what is returned will be a props of connected view component
     * */
    return {
        books: state.books
    }
};


export default connect(mapStateToProps)(BookList);