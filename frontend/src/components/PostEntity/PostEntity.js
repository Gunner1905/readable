import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import {
  upVotePost,
  downVotePost,
  deletePost
} from '../../actions/Posts'
import IconButton from './IconButton'
import CloseButton from './CloseButton'
import VoteMarker from './VoteMarker'
import CategoryMarker from './CategoryMarker'

class PostEntity extends Component {

  upVote = () => {
    this.props.upVotePost(this.props.post.id)
  }

  downVote = () => {
    this.props.downVotePost(this.props.post.id)
  }

  handleDeletePost = () => {
    this.props.deletePost(this.props.post.id)
  }

  render() {
    const { post } = this.props

    const postDate = new Date(post.timestamp)

    return (
      <li className="list-group-item post">
        <div className="d-flex justify-content-between align-items-start">
          <Link className="h2" to={`/post/${post.id}`}>{post.title}</Link>
          <CloseButton
            handleDelete={this.handleDeletePost}
          />
        </div>
        <div>
          <small className="text-muted">Posted by {post.author}</small>
        </div>
        <div className="mt-4">
          <TextTruncate line={1} truncateText="..." text={post.body} />
        </div>
        <div>
          <small className="text-muted">{postDate.toString()}</small>
        </div>
        <div className="mt-3 p-2 d-flex justify-content-between">
          <div>
            <span className="mr-2">
              <CategoryMarker category={post.category} />
            </span>
            <VoteMarker voteScore={post.voteScore} />
          </div>
          <div>
            <IconButton
              buttonClass="btn btn-outline-primary mr-3"
              iconClass="fa fa-thumbs-o-up"
              clickHandler={this.upVote}
            />
            <IconButton
              buttonClass="btn btn-outline-secondary"
              iconClass="fa fa-thumbs-o-down"
              clickHandler={this.downVote}
            />
          </div>
        </div>
      </li>
    )
  }
}

export default connect(null, {
  upVotePost, downVotePost, deletePost
})(PostEntity)
