import React from 'react'

//Components
import Input from '../../Components/Input'

export default function Searcher({ handlePetsList }) {
  function search(e) {
    handlePetsList(e)
  }

  return (
    <div className="searcher-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={search}
      />
    </div>
  )
}
