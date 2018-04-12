import React from 'react'
import { Link } from 'react-router-dom'

const EditMarker = ({link}) => {
  return (
    <Link className="badge badge-success" to={link}>
    Edit{' '}<i className="fa fa-pencil-square-o" aria-hidden="true" />
    </Link>
  )
}

export default EditMarker