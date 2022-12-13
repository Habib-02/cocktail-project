import { useState } from 'react'
import data from './data'

import './index.css'

function LoremGenerator() {
  const [count, setCount] = useState('0')
  const [paragraphs, setParagraphs] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (amount <= 0) {
      amount = 1
    }
    setParagraphs(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </section>
  )
}

export default LoremGenerator
