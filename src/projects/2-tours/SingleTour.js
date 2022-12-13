import { useState } from 'react'

function SingleTour({ id, name, price, image, info, removeTour }) {
  const [isExpend, setIsExpend] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {isExpend ? info : `${info.slice(1, 200)}...`}
          <button onClick={() => setIsExpend(!isExpend)}>
            {isExpend ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default SingleTour
