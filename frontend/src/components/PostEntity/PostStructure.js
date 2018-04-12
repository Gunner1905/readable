import React from 'react'
import CategoryMarker from './CategoryMarker'
import VoteMarker from './VoteMarker'
import EditMarker from './EditMarker'

const PostStructure = ({ post }) => {
  return (
    <div>
      <div className="d-flex align-items-start">
        <h2 className="mr-2">{post.title}</h2>
        <EditMarker link={`/post/edit/${post.id}`} />
      </div>
      <div>
        <small className="text-muted">
          Posted by <strong>{post.author}</strong>
        </small>{' / '}
        <small className="text-muted">
          {(new Date(post.timestamp)).toString()}
        </small>
      </div>
      <div className="mt-3">
        <span className="mr-2">
          <CategoryMarker category={post.category} />
        </span>
        <VoteMarker voteScore={post.voteScore} />
      </div>
      <div className="mt-5">
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default PostStructure