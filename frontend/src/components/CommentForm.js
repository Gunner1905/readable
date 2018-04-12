import React, { Component } from 'react'
import _ from 'lodash'

class CommentForm extends Component {
  state = {
    comment: '',
    author: ''
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const comment = {
      body: this.state.comment,
      author: this.state.author,
      parentId: this.props.parentId
    }
    this.props.addComment(comment)
    this.setState({
      comment: '',
      author: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
	    <div className="form-group">
		  <label htmlFor={"comment"}>{_.capitalize("comment")}</label>
		  <input
			type="text"
			className="form-control"
			id={"comment"}
			value={this.state.comment}
			required={true}
			disabled={false}
			onChange={e => this.handleChange(e, "comment")}
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
			disabled={false}
			onChange={e => this.handleChange(e, "author")}
		  />
		</div>
		
        <div className="mt-3">
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Add Comment
          </button>
        </div>
      </form>
    )
  }
}

export default CommentForm
