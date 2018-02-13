import React, { Component } from 'react';
import Books from './../containers/books';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BookDetails from './../containers/books/details';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * rendering app
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/:id" exact component={BookDetails} />

          {/* 404 page */}
          <Route path="/:id/*" exact component={() => <div style={ { padding: "30px" } }>404 Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);