import { useState, useEffect } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import data from './data'

import './index.css'

function Slider() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex((prevIndex) => {
      let index = prevIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  const nextSlide = () => {
    setIndex((prevIndex) => {
      let index = prevIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => {
        let index = prevIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 3000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Slider
