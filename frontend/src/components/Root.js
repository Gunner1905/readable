import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Filtering from '../components/Filtering'
import { getAllCategories } from '../actions'
import { getPostsByCategory } from '../actions/Posts'
import PostListing from '../components/PostEntity/PostListing'
import Title from '../components/Title'

class Root extends Component {
	
  state = {
    filter: 'all'
  }
  
  componentWillReceiveProps(followingProps) {
    const followingCategories = followingProps.categories
    const thisCategories = this.props.categories
    if (followingCategories.length > 0 && thisCategories.length === 0) {
      followingCategories.forEach(category => {
        this.props.getPostsByCategory(category)
      })
    }
  }
  
  componentDidMount() {
    this.props.getAllCategories()
  }

  selectFilter = (category) => {
    this.setState({
      filter: category
    })
  }

  render () {
    return (
      <div>
        <Title />
        <div className="container pb-5">
          <Filtering
              selectFilter={this.selectFilter}
              categories={this.props.categories}
              default={this.state.filter}
          />
          <div className="mt-4 d-flex flex-row-reverse">
            <Link className="btn btn-success" to="/post/new">
              New Post{' '}
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>
          </div>
            <div className="mt-4">
              <PostListing
                posts={this.props.posts}
                filter={this.state.filter}
              />
            </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

export default connect(
  mapStateToProps, { getAllCategories, getPostsByCategory }
)(Root)