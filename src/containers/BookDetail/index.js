import React from 'react';
import {connect} from 'react-redux';

import BookSelected from '../../components/BookSelected';

const mapStateToProps = (state) => {
    return {book: state.bookSelected}
};


export default connect(mapStateToProps)(BookSelected);