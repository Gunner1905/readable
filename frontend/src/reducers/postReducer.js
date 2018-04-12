import {
	GET_POST_BY_ID_SUCCESS
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
      case GET_POST_BY_ID_SUCCESS:
        return { ...action.post }
      default:
        return state
  }
}