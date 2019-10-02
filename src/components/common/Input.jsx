import React from "react"

const Input = props => {
  const {
    classes,
    name,
    type = "text",
    label,
    placeholder,
    value,
    onChange
  } = props

  const { error } = props

  const { children } = props

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        className={classes || "form-control"}
        id={name}
        placeholder={placeholder}
        type={type}
      />
      {error && (
        <div className="alert-danger small">
          {/* return normal error TODO */}
          <small>{error.email}</small>
        </div>
      )}
      {!error && children}
    </div>
  )
}

// TO DO: additional .on-input-error ( reduce the size of alert elements )

export default Input
