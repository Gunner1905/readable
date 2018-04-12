import React, { Component } from 'react'
import _ from 'lodash'
import ReactLoading from 'react-loading'

class Filtering extends Component {
  state = {
    filter: this.props.default
  }

  handleClick = category => {
    this.setState(
      {
        filter: category
      },
      () => this.props.selectFilter(category)
    )
  }

  render() {
    return (
      <div className="d-flex justify-content-start align-items-center mt-5">
        <span className="text-secondary mr-3">Filter: </span>
        {this.props.categories.length !== 0 ? (
          this.props.categories.map(category => (
            <button
              key={category}
              type="button"
              style={{ width: '100px' }}
              className={
                category !== this.state.filter
                  ? 'btn btn-outline-secondary mr-3' 
                  : 'btn btn-danger mr-3'
              }
              onClick={() => this.handleClick(category)}
            >
              {_.capitalize(category)}
            </button>
          ))
        ) : (
          <ReactLoading type="spokes" color="gray" height="64px" width="64px" />
        )
	}
      </div>
    )
  }
}

export default Filtering
