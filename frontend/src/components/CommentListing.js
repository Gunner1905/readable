import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentEntity from '../components/CommentEntity'
import {
  deleteComment,
  editComment,
  upVoteComment,
  downVoteComment 
} from '../actions/Comments'

class CommentListing extends Component {
	
  deleteComment = (id) => {
    this.props.deleteComment(id)
  }
  editComment = ({id, body}) => {
    this.props.editComment({id, body})
  }
  
  upVote = (id) => {
    this.props.upVoteComment(id)
  }
  downVote = (id) => {
    this.props.downVoteComment(id)
  }
  
  render () {
    const showComments = this.props
      .comments.map(comment =>
        <CommentEntity
          key={comment.id}
          comment={comment}
          upVote={this.upVote}
          downVote={this.downVote}
          deleteComment={this.deleteComment}
          editComment={this.editComment}
        />
      )
    return (
      <ul className="list-group">
        {showComments}
      </ul>
    )
  }
}

export default connect(null, { deleteComment, editComment, upVoteComment, downVoteComment })(CommentListing)