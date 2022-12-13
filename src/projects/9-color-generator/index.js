import { useState } from 'react'

import './index.css'

function ColorGenerator() {
  const [color, setColor] = useState('')

  const colorChangeHandler = () => {}

  return (
    <section className="container">
      <h3>Color Generator</h3>
      <form>
        <input
          type="text"
          placeholder="#333"
          value={color}
          onChange={colorChangeHandler}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <section className="color"></section>
    </section>
  )
}

export default ColorGenerator
