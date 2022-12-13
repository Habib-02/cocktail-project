import { useState, useEffect } from 'react'

import SingleTour from './SingleTour'

import './index.css'

const url = 'https://course-api.com/react-tours-project'

function Tours() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const updatedTour = data.filter((tour) => tour.id !== id)
    setData(updatedTour)
  }

  if (loading) {
    return (
      <main>
        <h2 className="loading">Loading...</h2>
      </main>
    )
  }

  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {data.map((tour) => {
            return (
              <SingleTour key={tour.id} {...tour} removeTour={removeTour} />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Tours
