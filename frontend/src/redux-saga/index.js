import {
  put,
  call,
  all,
  takeLatest,
  takeEvery
} from 'redux-saga/effects'

import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_CATEGORY_SUCCESS,
  UPVOTE_POST,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST,
  DOWNVOTE_POST_SUCCESS,
  ADD_POST,
  ADD_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  GET_POST_BY_ID,
  GET_POST_BY_ID_SUCCESS,
  EDIT_POST_BY_ID,
  EDIT_POST_BY_ID_SUCCESS,
  
  UPVOTE_COMMENT,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT,
  DOWNVOTE_COMMENT_SUCCESS,  
  GET_ALL_COMMENTS_BY_ID,
  GET_ALL_COMMENTS_BY_ID_SUCCESS,
  GET_ALL_COMMENTS_BY_ID_RESET,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  EDIT_COMMENT_SUCCESS
} from '../actions/types'

import * as API from '../utils/api'

function* getAllCategories() {
  const categories = yield call(API.getAllCategories)
  categories.unshift({ name: 'all' })
  yield put({
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
  })
}

function* getPostsByCategory(action) {
  let posts

  posts = yield call(API.getPostsByCategory, action.category)

  yield put({
    type: GET_POSTS_BY_CATEGORY_SUCCESS,
    posts,
    category: action.category
  })
}

function* upVotePost(action) {
  const post = yield call(API.upVotePost, action.id)
  yield put({
    type: UPVOTE_POST_SUCCESS,
    post
  })
}

function* downVotePost(action) {
  const post = yield call(API.downVotePost, action.id)
  yield put({
    type: DOWNVOTE_POST_SUCCESS,
    post
  })
}

function* upVoteComment(action) {
  const comment = yield call(API.upVoteComment, action.id)
  yield put({
    type: UPVOTE_COMMENT_SUCCESS,
    comment
  })
}

function* downVoteComment(action) {
  const comment = yield call(API.downVoteComment, action.id)
  yield put({
    type: DOWNVOTE_COMMENT_SUCCESS,
    comment
  })
}

function* addPost(action) {
  const post = yield call(API.addPost, action.post)
  yield put({
    type: ADD_POST_SUCCESS,
    post
  })
}

function* deletePost(action) {
  const post = yield call(API.deletePost, action.id)
  yield put({
    type: DELETE_POST_SUCCESS,
    post
  })
}

function* getPostById(action) {
  const post = yield call(API.getPostById, action.id)
  yield put({
    type: GET_POST_BY_ID_SUCCESS,
    post
  })
}

function* editPostById(action) {
  const post = yield call(API.editPostById, action.post)
  yield put({
    type: EDIT_POST_BY_ID_SUCCESS,
    post
  })
}

function* getAllCommentsById(action) {
  const comments = yield call(API.getAllCommentsById, action.id)
  if (comments.length > 0) {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_SUCCESS,
      comments
    })
  } else {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_RESET
    })
  }
}

function* deleteComment(action) {
  const comment = yield call(API.deleteComment, action.id)
  const comments = yield call(API.getAllCommentsById, comment.parentId)
  if (comments.length > 0) {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_SUCCESS,
      comments
    })
  } else {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_RESET
    })
  }
}

function* addComment(action) {
  const comment = yield call(API.addComment, action.comment)
  const comments = yield call(API.getAllCommentsById, comment.parentId)
  if (comments.length > 0) {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_SUCCESS,
      comments
    })
  } else {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_RESET
    })
  }
}

function* editComment(action) {
  const comment = yield call(API.editComment, action.comment)
  yield put({
    type: EDIT_COMMENT_SUCCESS,
    comment
  })
}

const categorySaga = [
  takeLatest(GET_ALL_CATEGORIES, getAllCategories)
]

const postSaga = [
  takeEvery(GET_POSTS_BY_CATEGORY, getPostsByCategory),
  takeEvery(UPVOTE_POST, upVotePost),
  takeEvery(DOWNVOTE_POST, downVotePost),
  takeLatest(ADD_POST, addPost),
  takeLatest(DELETE_POST, deletePost),
  takeLatest(GET_POST_BY_ID, getPostById),
  takeLatest(EDIT_POST_BY_ID, editPostById)
]

const commentSaga = [
  takeLatest(GET_ALL_COMMENTS_BY_ID, getAllCommentsById),
  takeEvery(UPVOTE_COMMENT, upVoteComment),
  takeEvery(DOWNVOTE_COMMENT, downVoteComment),
  takeLatest(DELETE_COMMENT, deleteComment),
  takeLatest(ADD_COMMENT, addComment),
  takeLatest(EDIT_COMMENT, editComment)
]

export default function* rootSaga() {
  yield all([
    ...categorySaga,
    ...postSaga,
    ...commentSaga
  ])
}