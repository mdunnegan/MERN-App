// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_EDIT_POST = 'TOGGLE_EDIT_POST';

// Export Actions
// These are Action CREATORS according to http://redux.js.org/docs/basics/Actions.html
// If this function took an argument (something we'd sent to the store), we'd have it as
// part of the return object
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleEditPost(cuid) {
  return {
    type: TOGGLE_EDIT_POST,
    cuid,
  };
}
