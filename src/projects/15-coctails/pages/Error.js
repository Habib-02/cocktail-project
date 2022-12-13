import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h2>oops! it's a dead end</h2>
        <Link to="/" className="btn btn-primary">
          back to home
        </Link>
      </div>
    </section>
  )
}

export default Error
