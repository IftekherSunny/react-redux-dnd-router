/**
 * books action types
 */
export const SAVE = "save";

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