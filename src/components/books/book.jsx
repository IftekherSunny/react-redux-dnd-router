import React from 'react';
import { Link } from 'react-router-dom';
import { DragSource, DropTarget } from 'react-dnd';

/**
 * book source const
 */
export const BOOK_SOURCE = "book_source"

/**
 * dragging contract
 */
const dragSource = {
  beginDrag(props, monitor) {
    return { id: props.book.id }
  }
};

/**
 * injecting dragSource props to the component
 * 
 * @param {*} connect 
 * @param {*} monitor 
 */
function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  }
}

/**
 * handle dropped item
 */
const dropTarget = {
  drop(props, monitor) {
    // handling reorder
    let from = monitor.getItem().id - 1;
    let to = props.book.id - 1;

    props.move({ from, to })
  }
};

/**
 * injecting dropTarget props to the component
 * 
 * @param {*} connect 
 * @param {*} monitor 
 */
function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

/**
 * rendering book name
 */
class Book extends React.Component {
  render() { 
    const { connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(
      connectDropTarget(
        <li key={this.props.book.id}>
          <Link to={"/" + this.props.book.id}>{this.props.book.name}</Link>
        </li>
      )
    )
  }
}


export default DragSource(BOOK_SOURCE, dragSource, dragCollect)(
  DropTarget(BOOK_SOURCE, dropTarget, dropCollect)(Book)
);