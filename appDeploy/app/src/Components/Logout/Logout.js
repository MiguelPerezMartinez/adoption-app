import React, { useState, useEffect } from 'react'

export default function Favorite({ favorite, handleFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(favorite)
  }, [])

  function handleClick() {
    setIsFavorite(!isFavorite)
    handleFavorite(!isFavorite)
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <image id="Capa_1" data-name="Capa 1" width="80" height="80" />
    </svg>
  )
}
