import React from 'react'

export default function Button({ value, handleSection, type }) {
  function handleClick() {
    handleSection()
  }

  return (
    <button
      className="send-button"
      onClick={handleSection ? handleClick : null}
      type={type === 'submit' ? 'submit' : ''}
    >
      {value}
    </button>
  )
}
