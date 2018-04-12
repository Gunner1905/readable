import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RadioForm from '../RadioEntity/RadioForm'
import _ from 'lodash'
class PostForm extends Component {
  state = {
    category: "react",
    title: "",
    content: "",
    author: "",
    redirect: false
  }

  componentDidMount() {
    const { postType, post } = this.props
    if (postType === "edit") {
      this.setState({
        category: post.category,
        title: post.title,
        content: post.body,
        author: post.author
      })
    }
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
	if (this.props.postType === "edit") { //if post will be edited
      const post = {
        id: this.props.post.id,
        title: this.state.title,
        body: this.state.content,
      }
      this.props.editPost(post)
    }
    else if (this.props.postType === "new") { //if new post will be added
      const post = {
        category: this.state.category,
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
      }
      this.props.addPost(post)
    }  
    this.setState({ redirect: true })
  }

  render() {
    const { postType } = this.props

    let { categories } = this.props
    let disabled = false
    if (postType !== "new") {
	  if (this.state.redirect) {
        return <Redirect to={`/post/${this.props.post.id}`} />
      }
      const {category} = this.props.post
      categories = [category]
      disabled = true
	}
     else {
      if (this.state.redirect) {
        return <Redirect to="/" />
      }
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <RadioForm
            label="Category"
            array={categories}
            checked={this.state.category}
            handleChange={this.handleChange}
          />
          <div className="form-group">
			  <label htmlFor={"title"}>{_.capitalize("title")}</label>
			  <input
				type="text"
				className="form-control"
				id={"title"}
				value={this.state.title}
				required={true}
				disabled={disabled}
				onChange={e => this.handleChange(e, "title")}
				placeholder={`Enter ${_.capitalize("title")}`}
			  />
		  </div>
		  <div className="form-group">
			  <label htmlFor={"content"}>{_.capitalize("content")}</label>
			  <textarea
				type="text"
				className="form-control"
				id={"content"}
				value={this.state.content}
				required={true}
				onChange={e => this.handleChange(e, "content")}
				placeholder={`Enter ${_.capitalize("content")}`}
			  />
		  </div>
		  <div className="form-group">
			  <label htmlFor={"author"}>{_.capitalize("author")}</label>
			  <input
				type="text"
				className="form-control"
				id={"author"}
				value={this.state.author}
				required={true}
				disabled={disabled}
				onChange={e => this.handleChange(e, "author")}
				placeholder={`Enter ${_.capitalize("author")}`}
			  />
		  </div>          
          <div className="mt-5">
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm
