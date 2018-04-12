import React, { Component } from 'react'
import VoteMarker from '../components/PostEntity/VoteMarker'
import IconButton from '../components/PostEntity/IconButton'
import CloseButton from '../components/PostEntity/CloseButton'
import CommentEditForm from '../components/CommentEditForm'

class CommentEntity extends Component {
  state = {
    editMode: false
  }

  upVote = () => {
    this.props.upVote(this.props.comment.id)
  }
  downVote = () => {
    this.props.downVote(this.props.comment.id)
  }
  deleteComment = () => {
    this.props.deleteComment(this.props.comment.id)
  }

  editComment = (body) => {
    this.props.editComment({
      id: this.props.comment.id,
      body
    })
    this.setState({ editMode: false })
  }

  editMode = () => {
    this.setState({ editMode: true })
  }

  render() {
    const {comment} = this.props

    const showCommentBody = (this.state.editMode) ?
      <CommentEditForm
        defaultVal={comment.body}
        editComment={this.editComment}
      /> :
      (
        <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-start">
          {comment.body}&nbsp;
          <button
            type="button"
            className="badge badge-success"
            onClick={this.editMode}
          >
            Edit{' '}<i className="fa fa-pencil-square-o" aria-hidden="true" />
          </button>
        </div>
          <CloseButton
            closeStyle="text-muted"
            handleDelete={this.deleteComment}
          />
        </div>
      )

    return (
      <li className="list-group-item list-group-item-warning">
        {showCommentBody}
        <div>
          <small className="text-muted">commented by {comment.author}</small>
          {' / '}
          <small className="text-muted">
            {(new Date(comment.timestamp))
              .toLocaleString('en-GB',{ timeZone: 'UTC'})}
          </small>
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <VoteMarker voteScore={comment.voteScore} />
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

export default CommentEntity
