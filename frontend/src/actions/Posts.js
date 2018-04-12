import {
  GET_POSTS_BY_CATEGORY,
  ADD_POST,
  DELETE_POST,
  GET_POST_BY_ID,
  EDIT_POST_BY_ID,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from './types'

export const getPostsByCategory = (category) => ({
  type: GET_POSTS_BY_CATEGORY,
  category
})

export const addPost = (post) => ({
  type: ADD_POST,
  post
})

export const deletePost = (id) => ({
  type: DELETE_POST,
  id
})

export const getPostById = (id) => ({
  type: GET_POST_BY_ID,
  id
})

export const editPostById = (post) => ({
  type: EDIT_POST_BY_ID,
  post
})

export const upVotePost = (id) => ({
  type: UPVOTE_POST,
  id
})

export const downVotePost = (id) => ({
  type: DOWNVOTE_POST,
  id
})
