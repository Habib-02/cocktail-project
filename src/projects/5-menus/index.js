import { useState } from 'react'
import FilterButtons from './FilterButtons'
import MenuItem from './MenuItem'
import data from './data'

import './index.css'

function Menu() {
  const [items, setItems] = useState(data)
  const uniqueCategory = ['all', ...new Set(data.map((item) => item.category))]

  const filterHandler = (category) => {
    const filteredItems = data.filter((item) => item.category === category)
    setItems(filteredItems)
    if (category === 'all') {
      setItems(data)
    }
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <FilterButtons
          uniqueCategory={uniqueCategory}
          filterHandler={filterHandler}
        />
        <div className="section-center">
          {items.map((item) => {
            return <MenuItem key={item.id} {...item} />
          })}
        </div>
      </section>
    </main>
  )
}

export default Menu
