import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Header from '../../Components/Header'

export default function PetDashboard() {
  const { id } = useParams()
  const [petData, setPetData] = useState({})

  useEffect(() => {
    if (id) {
      getPet()
    }
  }, [])

  async function getPet() {
    const payload = { id: id }
    await axios
      .post(`${process.env.REACT_APP_URL}/pets/get-pet`, payload)
      .then((result) => {
        let { pet } = result.data.data
        console.log(pet)
        setPetData(pet)
      })
  }

  return (
    <>
      <Header />
      <section className="pets-dashboard-section">
        <Link to="/">RETURN</Link>
        {petData ? (
          <>
            <h1>{petData.name}</h1>
            <img src={petData.photo} alt={petData.name} />
            <p>
              <b>Description: </b>
              {petData.description}
            </p>
            <p>
              <b>Age: </b>
              {petData.age}
            </p>
            <p>
              <b>Adopted: </b>
              {petData.adopted ? 'Adopted' : 'Not yet!'}
            </p>
          </>
        ) : (
          ''
        )}
      </section>
    </>
  )
}
