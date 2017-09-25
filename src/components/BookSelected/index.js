import React, {Component} from 'react';

export default class BookSelected extends Component {
    render() {
        if (!this.props.book) return <div>Select Book to continue</div>;
        return(
            <div className="col-sm-6 book-detail">
                <h4>Details for:</h4>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}