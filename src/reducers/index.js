import BooksReducer from './books';
import { combineReducers } from 'redux';

/**
 * combining all reducers
 */
const rootReducer = combineReducers({
  books: BooksReducer,
});

export default rootReducer;
