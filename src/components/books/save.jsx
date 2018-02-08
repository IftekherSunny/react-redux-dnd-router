import React from 'react';

/**
 * save a new book
 */
export default class Save extends React.Component {
  
  /**
   * register book state
   */
  state = {
    book: ""
  }

  /**
   * updating book state
   */
  updateBook(event) {
    this.setState({ book: event.target.value })
  }

  /**
   * save a new book
   */
  save() {
    this.props.save(this.state.book);
    this.setState({ book: ""})
  }

  /**
   * rendering input field and save button
   */
  render() {
    return (
      <div>
        <input type="text" value={this.state.book} onChange={this.updateBook.bind(this)} />
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    )
  }
}