import { GET_ALL_CATEGORIES_SUCCESS } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      let array = []
      action.categories.forEach(category => {
        array.push(category.name)
      })
      return array
    default:
      return state
  }
}