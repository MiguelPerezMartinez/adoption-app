import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import Header from '../../Components/Header'
import Searcher from '../../Components/Searcher'
import Finder from '../../Components/Finder'

export default function Search() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [petName, setPetName] = useState(null)

  useEffect(() => {
    if (!user) navigate('/')
  }, [user, petName])

  function handlePetsList(e) {
    setPetName(e.target.value)
  }

  return (
    <>
      <Header />
      <section className="search-section">
        <Searcher handlePetsList={handlePetsList} />
        <Finder petName={petName ? petName : null} />
      </section>
    </>
  )
}
