import React from 'react'
import _ from 'lodash'

const RadioForm = ({ name, val, handleChange, checked = false }) => {
  return (
    <label
      style={{ width: '100px' }}
      className={`btn ${
        checked
          ? 'btn-danger active'
          : 'btn-secondary'
      }`}
    >
      <input
        type="radio"
        id={val}
        autoComplete="off"
        value={val}
        onChange={e => handleChange(e, name)}
        checked={val}
      />
      {_.capitalize(val)}
    </label>
  )
}

export default RadioForm