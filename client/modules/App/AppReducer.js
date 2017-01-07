// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_EDIT_POST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
};

// Reducers define how state changes when actions are called
// The reducer is a pure function that takes the previous state and an action, and returns the next state.
const AppReducer = (state = initialState, action) => {
  switch (action.type) {

    // Remember, TOGGLE_ADD_POST is defined in (corresponding) AppActions.js
    case TOGGLE_ADD_POST :
      return {
        showAddPost: !state.showAddPost,
      };
      // returning state (no changes) instead of changing state disables form toggling
      // Also a good way of showing hotloading
      // return state;

    case TOGGLE_EDIT_POST :
      // console.log(action);
      return {
        showAddPost: state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Get showEditPost
export const getShowEditPost = state => state.app.showEditPost;

// Export Reducer
export default AppReducer;
