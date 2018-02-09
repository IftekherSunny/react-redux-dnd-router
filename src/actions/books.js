/**
 * book action types
 */
export const SAVE = "save";

export const MOVE = "move";

/**
 * save a new book
 * 
 * @param {*} payload 
 */
export function save(payload) {
  return {
    type: SAVE,
    payload: payload
  }
}

/**
 * moving book
 * 
 * @param {*} payload 
 */
export function move(payload) {
  return {
    type: MOVE,
    payload: payload
  }
}