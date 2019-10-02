import React, { useState, useEffect } from "react"
import propTypes from "prop-types"

const BaseCheckbox = props => {
  const [checked, setChecked] = useState("")

  const { onClick, label, name, classes, value } = props

  useEffect(() => {
    return value ? setChecked("") : setChecked("checked")
  }, [value])

  return (
    <div className="form-group form-check">
      <input
        onChange={onClick}
        value={props.value}
        type={props.type}
        checked={checked}
        className={classes}
        id={name}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

BaseCheckbox.defaultProps = {
  type: "checkbox",
  classes: "form-check-input",
  disabled: false,
  checked: true,
  value: false
}

BaseCheckbox.propTypes = {
  onClick: propTypes.func.isRequired,
  label: propTypes.string.isRequired
}

export default BaseCheckbox
