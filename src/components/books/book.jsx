import React from 'react';

/**
 * rendering book name
 */
export default class Book extends React.Component {
  render() {
    return (
      <li key={this.props.book.id}>{this.props.book.name}</li>
    )
  }
}