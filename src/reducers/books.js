import { SAVE } from './../actions/books';

/**
 * initial books list
 */
const initialState = [
  { id: 1, name: "Learning ReactJs" },
  { id: 2, name: "JavaScript Good Parts"}
]

/**
 * books reducers
 */
export default (state, action) => {
  if (!state) state = initialState;
  
  switch(action.type) {
    
    // handling book save
    case SAVE:
      return [
        ...state,
        {id: state.length + 1, name: action.payload}
      ];

    // return unchanged state  
    default:
      return state; 
  }
}