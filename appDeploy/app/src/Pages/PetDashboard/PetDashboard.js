import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from '../../Components/Header'

export default function PetDashboard() {
  const { id } = useParams()
  return (
    <>
      <Header />
      <section className="pets-dashboard-section">
        <h1>RETURN</h1>
      </section>
    </>
  )
}
