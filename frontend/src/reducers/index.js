import { combineReducers } from 'redux'

import CategoryReducer from './categoryReducer'
import PostsReducer from './postsReducer'
import PostReducer from './postReducer'
import CommentsReducer from './commentsReducer'		


export default combineReducers({
  categories: CategoryReducer,
  posts: PostsReducer,
  post: PostReducer,
  comments: CommentsReducer
})