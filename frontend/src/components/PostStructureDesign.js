import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import _ from 'lodash'
import Title from '../components/Title'
import PostDetail from '../components/PostEntity/PostStructure'
import CommentListing from '../components/CommentListing'
import CommentForm from '../components/CommentForm'
import { getPostById } from '../actions/Posts'
import { getCommentsById, addComment } from '../actions/Comments'

class PostStructureDesign extends Component {
	
  addCommentHandler = (comment) => {
    console.log(comment)
    this.props.addComment(comment)
  }
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getCommentsById(id)
    this.props.getPostById(id)
  }

  render () {

    const showPostDetail = _.isEmpty(this.props.post) ?
      <ReactLoading type="spokes" color="gray" height="64px" width="64px" /> :
      <PostDetail post={this.props.post} comments={this.props.comments} />

    const showCommentList = !_.isEmpty(this.props.comments) &&
      <CommentListing comments={this.props.comments} />

      return (
      <div>
        <Title />
        <div className="container mt-3 pb-5">
          <div className="my-5">
            { showPostDetail }
          </div>
          <hr />
          <div className="my-5">
            <CommentForm
              parentId={this.props.match.params.id}
              addComment={this.addCommentHandler}
            />
          </div>
          <hr />
          <div className="mt-5">
            { showCommentList }
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  post: state.post,
  comments: state.comments
})

export default connect(mapStateToProps, { getPostById, getCommentsById, addComment })(PostStructureDesign)