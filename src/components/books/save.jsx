import React from 'react';

/**
 * save a new book
 */
export default class Save extends React.Component {
  
  /**
   * register book state
   */
  state = {
    book: {
      name: null,
      author: null
    }
  }

  /**
   * updating book state
   */
  updateBook(fieldName, event) {
    let book = Object.assign(this.state.book, { [fieldName]: event.target.value});
    this.setState({ book })
  }

  /**
   * save a new book
   */
  save() {
    this.props.save(this.state.book);
    this.setState({
      book: {
        name: null,
        author: null
      }})
  }

  /**
   * rendering input field and save button
   */
  render() {
    return (
      <div>
        <h3>Save a new book: </h3> <br />
        <input type="text" placeholder="Name" value={this.state.book.name} onChange={this.updateBook.bind(this, "name")} /> <br />
        <input type="text" placeholder="Author" value={this.state.book.author} onChange={this.updateBook.bind(this, "author")} /> <br />
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    )
  }
}