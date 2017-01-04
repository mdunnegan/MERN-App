import { ADD_POST, ADD_POSTS, DELETE_POST } from './PostActions';

// Initial State
const initialState = { data: [] };

// The reducer takes two parameters: An action, and a next state.
// The reducer applies the given action to that state, and returns the desired next state.

// Redux will call our reducer with an undefined state for the first time

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      // console.log('action');
      // console.log(action);
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
