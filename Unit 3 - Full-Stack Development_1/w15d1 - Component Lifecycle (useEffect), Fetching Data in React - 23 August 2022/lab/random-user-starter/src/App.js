import React, {useState, useEffect} from 'react';
import './styles.css';

export default function App() {
  const [person, setPerson] = useState(null)
  const [label, setLabel] = useState('name')
  const [value, setValue] = useState('')

  const handleClick = (e) => {
    determineValue(e.target.id)
  };

  const determineValue = (selectedLabel) => {
    setLabel(selectedLabel)

    switch (selectedLabel) {
      case 'name':
        setValue(person.first_name + " " + person.last_name)
        break
      case 'email':
        setValue(person.email)
        break
      case 'birthdate':
        setValue(person.date_of_birth)
        break
      case 'city':
        setValue(person.address.city)
        break
      case 'phone':
        setValue(person.phone_number)
        break
      default:
    }
  }

  const fetchProfile = () => {
    fetch('https://random-data-api.com/api/v2/users')
        .then(response => {
          return response.json()
        })
        .then(respJson => {
          setPerson(respJson) // setting of state takes time, and is not immediate
          // determineValue(label) // will execute without waiting for setting of state to finish
        })
  }

  const styles = {};

  // useEffect(() => {}) : whichever props or state changes, execute the useEffect
  // useEffect(() => {}, []) : whichever props or state changes, do not care because dependency list is empty. Runs only ONCE during component mounting
  // useEffect(() => {}, [person]) : execute whenever person state has been updated

  useEffect(
    () => {
      fetch('https://random-data-api.com/api/v2/users')
        .then(response => {
          return response.json()
        })
        .then(respJson => {
          setPerson(respJson) // setting of state takes time, and is not immediate
          // determineValue(label) // will execute without waiting for setting of state to finish
        })
    },
    []
  )

  useEffect(
    () => {
      if (person) {
        determineValue(label)
      }
    },
    [person]
  )

  return (
    <div>
      <div>
        <button onClick={fetchProfile}>Get another profile</button>
      </div>
      <div id="container">
        <div style={ person ? { backgroundImage: `url(${person.avatar})` } : {} } id="photo"></div>
        <div id="content">
          <span id="smalltext">My {label} is</span>
          <span id="bigtext">{value}</span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="name" role="img" aria-labelledby="face">
            😀
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="email" role="img" aria-labelledby="email">
            📧
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="birthdate" role="img" aria-labelledby="confetti">
            🎉
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="city" role="img" aria-labelledby="city">
            🌆
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="phone" role="img" aria-labelledby="tele">
            📞
          </span>
        </div>
      </div>
    </div>
  );
}
