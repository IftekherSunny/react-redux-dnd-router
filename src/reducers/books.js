import { SAVE, MOVE } from './../actions/books';

/**
 * initial books list
 */
const initialState = [
  { id: 1, name: "React.js Essentials", author: "Artemij Fedosejev" },
  { id: 2, name: "JavaScript Good Parts", author: "Douglas Crockford"}
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
        {id: state.length + 1, name: action.payload.name, author: action.payload.author}
      ];

    // moving book name  
    case MOVE:
      state.splice(action.payload.to, 0, state.splice(action.payload.from, 1)[0]);

      return [...state];

    // return unchanged state  
    default:
      return state; 
  }
}