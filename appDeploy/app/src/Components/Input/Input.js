import React from 'react'

export default function Input({ type, placeholder, name, handleChange = '' }) {
  function onChange(e) {
    handleChange(e)
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="search-input"
      onChange={onChange}
      required
    />
  )
}
