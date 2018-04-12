import React from 'react'
import _ from 'lodash'

const CategoryMarker = ({category}) => {
  return (
    <span className="badge badge-primary" disabled>
    {_.capitalize(category)}
  </span>
  )
}

export default CategoryMarker
