import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Books from './../../components/books';
import { save } from './../../actions/books';

/**
 * mapping redux books state to the books props
 * 
 * @param {*} state 
 */
const mapStateToProps = state => {
  return {
    books: state.books
  }
}

/**
 * binding books required action to the props
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ save }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Books)