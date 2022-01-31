import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import Header from '../../Components/Header'
import Searcher from '../../Components/Searcher'
import Finder from '../../Components/Finder'

export default function Search() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (!user) navigate('/')
  }, [user])
  return (
    <>
      <Header />
      <section className="search-section">
        <Searcher />
        <Finder />
      </section>
    </>
  )
}
