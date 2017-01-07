import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const TOGGLE_EDIT_POST_SECTION = 'TOGGLE_EDIT_POST_SECTION';
export const CREATE_TOGGLE_EDIT_POST_LIST = 'CREATE_TOGGLE_EDIT_POST_LIST';

// Export Actions (these are really 'Action Creators')
export function addPost(post) {
  // console.log("object we're dispatching");
  // console.log(post);
  // this object (technically an action) we're returning becomes the 'action' argument in the PostReducer
  // Somehow, dispatch just knows
  return {
    type: ADD_POST,
    post,
  };
}

// this is called from PostListPage.js
// by a line:
// this.props.dispatch(toggleAddPost());

export function addPostRequest(post) {
  return (dispatch) => {
    // So we call the api, and when it returns,
    // we update the client-side data structure
    // by going through the reducer
    return callApi('posts', 'post', { // the second param is the request type
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
      // ACTIONS (NOT ACTION CREATORS) GET PASSED TO THE DISPATCH FUNCTION
    }).then(res => dispatch(addPost(res.post))); // how does it know what reducer to send to? Or does it just know from 'ADD_POST', which will be the type
    // Apparently, the store listens directly for actions
  };
}

// More examples of action creators
// All actions have a type, then some state
// Fun fact: In traditional Flux, action creators often trigger a dispatch when invoked
export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function createToggleEditPostList(post) {
  return {
    type: CREATE_TOGGLE_EDIT_POST_LIST,
    post,
  };
}

export function toggleEditPostSection(post) {
  return {
    type: TOGGLE_EDIT_POST_SECTION,
    post,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
      dispatch(createToggleEditPostList(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}
