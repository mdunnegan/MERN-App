import { ADD_POST, ADD_POSTS, DELETE_POST, TOGGLE_EDIT_POST_SECTION, CREATE_TOGGLE_EDIT_POST_LIST } from './PostActions';

Array.prototype.replaceAtIndex = function(index, val){
  this[index] = val;
  return this;
}

// Initial State
const initialState = { data: [], getShowEditPostSections: []};

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
        getShowEditPostSections: [ false, ...state.getShowEditPostSections ]
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
        //getShowEditPostSections: state.getShowEditPostSections.filter(p => Object.keys(p)[0] !== action.cuid),
      };

    case TOGGLE_EDIT_POST_SECTION :

      let postIndex;

      state.data.forEach((x, i) => {
        if (x === action.post){
          postIndex = i;
        }
      });

      return {
        data: [...state.data],
        getShowEditPostSections: [...state.getShowEditPostSections.replaceAtIndex(postIndex, !state.getShowEditPostSections[postIndex])]
      }

    case CREATE_TOGGLE_EDIT_POST_LIST :
      return {
        data: [...state.data],
        getShowEditPostSections: [...action.post.map(x => false)]
      }

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Get a post's edit form toggle state by post
export const getShowEditPostSection = (state, p) => state.posts.data.filter(post => p === post);

// Get the edit section list
export const getToggledEditSections = (state) => state.posts.getShowEditPostSections;

// Export Reducer
export default PostReducer;
