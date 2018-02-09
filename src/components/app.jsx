import Book from './../containers/books';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

/**
 * rendering app
 */
class App extends Component {
  render() {
    return (
      <Book />
    );
  }
}

export default DragDropContext(HTML5Backend)(App);