import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import PostForm from '../components/PostEntity/PostForm'
import Title from '../components/Title'
import { getAllCategories } from '../actions'
import { addPost, getPostById, editPostById } from '../actions/Posts'
class FormDesign extends Component {

  handleAddPost = (post) => {
    this.props.addPost(post)
  }

  handleEditPost = ({ id, title, body }) => {
    this.props.editPostById({ id, title, body })
  }
  
  componentDidMount() {
    if (this.props.location.pathname !== '/post/new') {
	   this.props.getPostById(this.props.match.params.id)
    } else {
      this.props.getAllCategories()
    }
  }

  render () {
    if (this.props.location.pathname === '/post/new') {
      return (
        <div>
          <Title />
          <div className="container p-5">
            <PostForm
              postType="new"
              addPost={this.handleAddPost}
              categories={this.props.categories}
            />
          </div>
        </div>
      )
    } else {
      if (!this.props.post.id) {
        return <ReactLoading type="spokes" color="gray" height="64px" width="64px" />
      }
      return (
          <div>
            <Title />
            <div className="container p-5">
              <PostForm
                postType="edit"
                post={this.props.post}
                editPost={this.handleEditPost}
              />
            </div>
          </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    post : state.post
  }
}

export default connect(
  mapStateToProps, { getAllCategories, addPost, getPostById, editPostById }
)(FormDesign)