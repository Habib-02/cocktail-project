import { useState } from 'react'

import data from './data'
import './index.css'

function BirthdayReminder() {
  const [persons, setPersons] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>{persons.length} birthdays today</h3>
        {persons.map((person) => {
          const { id, name, age, image } = person
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          )
        })}
        <button onClick={() => setPersons([])}>Clear All</button>
      </section>
    </main>
  )
}

export default BirthdayReminder
