import React, { useEffect, useState} from 'react'
import Card from '../animal-card/AnimalCard'

const AnimalDetails = (props) => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch('http://localhost:8000/api/v1/animals')
      const data = await res.json()

      setAnimals(data)
    }

    fetchApi()
  }, [])

  const animalCards = animals.map((animal) => (<Card key={animal._id} data={animal} />))

  return (
    <></>
  )
}

export default AnimalDetails
