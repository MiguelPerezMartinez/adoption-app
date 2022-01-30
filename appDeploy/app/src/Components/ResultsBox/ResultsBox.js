import React from 'react'
import { Link } from 'react-router-dom'

import Favorite from '../Favorite'

export default function ResultsBox({ data, handleFavorite, favorite }) {
  return !data ? (
    ''
  ) : (
    <Link
      to={`/pet-dashboard/${data.id}`}
      className="results-box-container"
      data-id={data.id}
    >
      <div id="finder-photo" style={{ backgroundImage: `url(${data.photo})` }}>
        .
      </div>
      <h1>{data.name}</h1>
      <Favorite handleFavorite={handleFavorite} favorite={favorite} />
    </Link>
  )
}