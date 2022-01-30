import React from 'react'

//Components
import Input from '../../Components/Input'

export default function Searcher() {
  return (
    <div className="searcher-container">
      <Input type="text" placeholder="Search..." />
    </div>
  )
}
