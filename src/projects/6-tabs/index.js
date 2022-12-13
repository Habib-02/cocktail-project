import { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

import './index.css'

const url = 'https://course-api.com/react-tabs-project'

function Tabs() {
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section className="section">
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      </section>
    )
  }

  const { company, dates, duties, title } = data[value]
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty) => (
            <div className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
      <button className="btn">more info</button>
    </section>
  )
}

export default Tabs
