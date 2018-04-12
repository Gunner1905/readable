import React from 'react'

const VoteMarker = ({voteScore}) => {
  let markerColor = "badge-secondary"
  if (voteScore >=10) {
    markerColor = "badge-danger"
  }
  return (
    <span className={`badge ${markerColor}`} disabled>
      Vote{' '}
      <span className="text-warning">
        {voteScore}
      </span>
    </span>
  )
}

export default VoteMarker
