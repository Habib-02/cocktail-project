import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'

import './index.css'

const Cart = () => {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default Cart
