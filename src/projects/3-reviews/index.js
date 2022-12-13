import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

import reviews from './data'

import './index.css'

function Reviews() {
  const [data, setData] = useState(reviews)
  const [index, setIndex] = useState(0)

  const review = data[index]

  const prevBtnHandler = () => {
    if (index === 0) {
      setIndex(data.length - 1)
    } else {
      setIndex((prevIndex) => prevIndex - 1)
    }
  }

  const nextBtnHandler = () => {
    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1)
    } else {
      setIndex(0)
    }
  }

  const randomBtnHandler = () => {
    const randomIndex = Math.floor(Math.random() * data.length)
    setIndex(randomIndex)
  }

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={review.image} alt={review.name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{review.name}</h4>
          <p className="job">{review.job}</p>
          <p className="info">{review.text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevBtnHandler}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextBtnHandler}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomBtnHandler}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  )
}

export default Reviews
