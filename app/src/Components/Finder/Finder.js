import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import axios from 'axios'

import ResultsBox from '../ResultsBox'
import Loading from '../Loading'

import { auth } from '../../services/firebase'

export default function Finder({ petName }) {
  const [user, error] = useAuthState(auth)
  const navigate = useNavigate()
  const [pets, setPets] = useState(null)

  const [favList, setFavList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (user) getFavorites()
    if (!user) return navigate('/')
  }, [])

  useEffect(() => {
    if (!petName || petName === {}) {
      axios.get(`${process.env.REACT_APP_URL}/pets/get-all`).then(
        (result) => {
          let { data } = result.data
          setIsLoaded(true)
          setPets(data.pets)
        },
        (error) => {
          setIsLoaded(false)
        }
      )
    } else {
      let payload = { name: petName }
      axios
        .post(`${process.env.REACT_APP_URL}/pets/get-pet-by-name`, payload)
        .then(
          (result) => {
            let { data } = result.data
            setPets(data.petsList)
          },
          (error) => {
            setIsLoaded(false)
          }
        )
    }
  }, [favList, petName])

  async function getFavorites() {
    if (user.email) {
      const payload = { email: user.email }
      await axios
        .post(`${process.env.REACT_APP_URL}/users/get-favorites`, payload)
        .then((result) => {
          const { favList } = result.data
          setFavList(favList)
        })
    }
  }

  async function handleFavorite(e) {
    const petId = e.target.parentNode.parentNode.getAttribute('data-id')
    console.log(petId)
    const payload = { email: user.email, petId: petId }
    await axios
      .post(`${process.env.REACT_APP_URL}/users/handle-favorite`, payload)
      .then((result) => {
        getFavorites()
      })
  }

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <Loading />
  } else {
    return (
      <div className="finder-container">
        {pets ? (
          pets.map((pet) => (
            <>
              <ResultsBox
                key={uuidv4()}
                data={pet}
                handleFavorite={handleFavorite}
                favorite={favList.find((element) => {
                  if (element === pet.id) {
                    return true
                  } else {
                    return false
                  }
                })}
              />
              {pets.length % 2 ? (
                <ResultsBox key={uuidv4()} data={false} />
              ) : (
                ''
              )}
            </>
          ))
        ) : error ? (
          <p key={uuidv4()}>{error}</p>
        ) : (
          <p key={uuidv4()}>No results</p>
        )}
      </div>
    )
  }
}
