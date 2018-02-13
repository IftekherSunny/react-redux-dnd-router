import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import BookDetails from './../../components/books/details';

/**
 * mapping redux books state to the books props
 * 
 * @param {*} state 
 */
const mapStateToProps = state => {
  return {
    books: _.mapKeys(state.books, "id")
  }
}

export default connect(mapStateToProps, {})(BookDetails)