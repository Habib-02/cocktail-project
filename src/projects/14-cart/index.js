import { useGlobalContext, AppProvider } from './context'

import './index.css'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function Cart() {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <main>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </main>
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
