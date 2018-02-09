import React from 'react';
import Save from './save';
import Book from './book';

/**
 * rendering books list
 */
export default class Books extends React.Component {
  render() {
    return (
      <div className="books">
        <div className="books__list">
          <ul>
            {this.props.books.map(book => <Book key={book.id} book={book} move={this.props.move}/>)}
          </ul>
        </div>

        <div className="books__create">
          <Save save={this.props.save} />
        </div>
      </div>
    )
  }
}