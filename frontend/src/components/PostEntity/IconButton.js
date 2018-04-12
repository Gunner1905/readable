import React, { Component } from 'react'

class IconButton extends Component {
  clickHandler = () => {
    this.props.clickHandler()
  }
  render() {
    const { buttonClass, iconClass } = this.props

    return (
      <button onClick={this.clickHandler}
        className={buttonClass}>
        <i className={iconClass} aria-hidden="true" />
      </button>
    )
  }
}

export default IconButton
