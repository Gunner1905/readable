import {
	GET_POSTS_BY_CATEGORY_SUCCESS,
	UPVOTE_POST_SUCCESS,
	DOWNVOTE_POST_SUCCESS,
	ADD_POST_SUCCESS,
	DELETE_POST_SUCCESS,
	EDIT_POST_BY_ID_SUCCESS
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
      case GET_POSTS_BY_CATEGORY_SUCCESS:
        const resetState = state.filter(post => post.category !== action.category)
        return [ ...resetState, ...action.posts]
      case UPVOTE_POST_SUCCESS:
      case DOWNVOTE_POST_SUCCESS:
        const newState = state.map(post => {
          if (post.id === action.post.id) {
            return action.post
          }
          return post
        })
        return [ ...newState ]
      case ADD_POST_SUCCESS:
        return [ ...state, action.post ]
      case DELETE_POST_SUCCESS:
        const deleteState = state.filter(post => {
          return post.id !== action.post.id
        })
        return [ ...deleteState ]
      case EDIT_POST_BY_ID_SUCCESS:
        const copyState = state.map(post => {
          if (post.id === action.post.id) {
            return action.post
          }
          return post
        })
        return [...copyState]
      default:
        return state
  }
}