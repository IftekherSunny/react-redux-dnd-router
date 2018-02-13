import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Details extends Component {
  
  /**
   * Create a new instance of book details
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    this.state = {
      book: {
        id: null,
        name: null,
        author: null
      },
      bookNotFound: false
    }
  }

  /**
   * Loading book by the given book id
   */
  componentDidMount() {
    let id = this.props.match.params.id;
    let book = this.props.books[id];

    if(book) this.setState({ book })
    else this.setState({ bookNotFound: true })
  }

  /**
   * rendering jsx
   */
  render() {
    if(this.state.bookNotFound) return <h1 style={ { padding: "30px" } } >404 ( The book doesn't exist )</h1>

    return (
      <div className="book-details" style={ { padding: "15px" } }>
        <Link to="/">Back to Home</Link>

        <h2>Book Details: </h2> <br />

        <b>ID:</b> {this.state.book.id} <br />
        <b>Name:</b> {this.state.book.name} <br />
        <b>Author:</b> {this.state.book.author} <br />
      </div>
    )
  }
}

export default Details;