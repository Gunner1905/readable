import {
  GET_ALL_COMMENTS_BY_ID,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from './types'

export const getCommentsById = (id) => ({
  type: GET_ALL_COMMENTS_BY_ID,
  id
})

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
})

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
})

export const editComment = (comment) => ({
  type: EDIT_COMMENT,
  comment
})
export const upVoteComment = (id) => ({
  type: UPVOTE_COMMENT,
  id
})

export const downVoteComment = (id) => ({
  type: DOWNVOTE_COMMENT,
  id
})