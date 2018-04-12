import {
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS,
  GET_ALL_COMMENTS_BY_ID_SUCCESS,
  GET_ALL_COMMENTS_BY_ID_RESET,
  EDIT_COMMENT_SUCCESS,
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
      case GET_ALL_COMMENTS_BY_ID_SUCCESS:
        return [ ...action.comments ]
      case GET_ALL_COMMENTS_BY_ID_RESET:
        return []
      case UPVOTE_COMMENT_SUCCESS:
      case DOWNVOTE_COMMENT_SUCCESS:
        const newState = state.map(comment => {
          if (comment.id === action.comment.id) {
            return action.comment
          }
          return comment
        })
        return [ ...newState ]
      case EDIT_COMMENT_SUCCESS:
        const newState2 = state.map(comment => {
          if (comment.id === action.comment.id) {
            return action.comment
          }
          return comment
        })
        return [ ...newState2 ]
      default:
        return state
  }
}