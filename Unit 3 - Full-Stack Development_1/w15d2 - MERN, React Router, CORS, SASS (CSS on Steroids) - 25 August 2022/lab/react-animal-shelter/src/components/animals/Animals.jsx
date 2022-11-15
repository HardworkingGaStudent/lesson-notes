import React, {useState, useEffect} from 'react'
import AnimalCard from '../card/AnimalCard';
import styles from './Animals.module.scss'

const Animals = (props) => {

  const [animals, setAnimals] = useState([])
  
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("http://localhost:8000/api/v1/animals");
      const data = await res.json();
      // console.log(data);
      setAnimals(data);
    }

    fetchApi();
  }, []);

  console.log("animals: ", animals);

  const animalCards = animals.map(animal => (
    <AnimalCard key={animal._id} data={animal} />
  ));

  return (
    <div className={styles['animals-container']}>
      <h1>Animals</h1>
      <div className='d-flex flex-row'>{animalCards}</div>
    </div>
  )
}

export default Animals