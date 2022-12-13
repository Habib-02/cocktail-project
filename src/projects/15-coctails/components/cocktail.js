import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className="btn btn-primary btn-detail">
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail