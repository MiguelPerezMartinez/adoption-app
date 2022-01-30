import React, { useState, useEffect } from 'react'

export default function Favorite({ favorite, handleFavorite, petId }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(favorite)
  }, [])

  function handleClick(e) {
    setIsFavorite(!isFavorite)
    handleFavorite(e)
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 20 20"
      className="fav-icon"
      onClick={handleClick}
    >
      <title>heart</title>
      <path
        fill={isFavorite ? 'red' : ''}
        d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"
      />
    </svg>
  )
}
