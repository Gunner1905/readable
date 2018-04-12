import React, { Component } from 'react'

class CommentEditForm extends Component {
  state = {
    body: this.props.defaultVal
  }
	
  editComment = (e) => {
    e.preventDefault()
    this.props.editComment(this.state.body)
  }
  
  handleChange = (e) => {
    this.setState({ body: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.editComment}>
        <div className="input-group">
          <input
            type="text" className="form-control"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <div className="input-group-addon">
            <button className="btn btn-outline-secondary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default CommentEditForm
