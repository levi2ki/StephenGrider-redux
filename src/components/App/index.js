import React, {Component} from 'react';

import Books from '../../containers/Books';
import BookDetail from '../../containers/BookDetail';


export default class App extends Component {
    render() {
        return (
            <div>
                <Books/>
                <BookDetail/>
            </div>
        );
    }
}
