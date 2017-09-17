import React from 'react';
import { connect } from 'react-redux';

import BookList from '../../components/BooksList'
import { selectBook } from '../../actions';
import {bindActionCreators} from 'redux';

/**
 * @function that connects return connected piece of redux state to view component
 * @arg {Object} state Redux state
 * @return {Object} new state
 * what is returned will be a props of connected view component
 * */
const mapStateToProps = state => {
    return {
        books: state.books
    }
};

/**
 * @function that connects dispatch to view component
 * @arg {Object} dispatch dispatch interface of redux store
 * return {Object} new state
 * what is returned will be a props of connected view component
 * */
const mapDispatchToProps = dispatch => bindActionCreators({selectBook}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(BookList);