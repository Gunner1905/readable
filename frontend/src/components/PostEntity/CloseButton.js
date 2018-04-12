import React from 'react'

const CloseButton = ({ handleDelete }) => {
  return (
    <button
      type="button"
	  title="Remove Post"
      aria-label="Close"
      onClick={handleDelete}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  )
}

export default CloseButton
