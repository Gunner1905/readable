import React from 'react'
import RadioButton from './RadioButton'

const RadioForm = ({ label, array, checked, handleChange }) => {
  return (
    <div>
      <label className="d-block">{label}</label>
      <div className="btn-group btn-group-toggle mb-4" data-toggle="buttons">
        {
          array
          .filter(category => category !== 'all').map(category => {
            return (
				<RadioButton
                key={category}
                name="category"
                val={category}
                handleChange={handleChange}
                checked={checked === category}
              /> 
            )
          })
        }
      </div>
    </div>
  )
}

export default RadioForm
