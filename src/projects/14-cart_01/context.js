import { useEffect, useReducer, useContext, createContext } from 'react'
import cartItems from './data'
import reducer from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    cart: cartItems,
    amount: 0,
    total: 0,
  })

  // Clear All the items
  const clearCart = () => {
    return dispatch({ type: 'CLEAR_CART' })
  }

  // Remove Item
  const removeItem = (id) => {
    return dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }
  // Increase item
  const increaseItem = (id) => {
    return dispatch({ type: 'INCREASE_ITEM', payload: { id } })
  }
  // Decrease Item
  const decreaseItem = (id) => {
    return dispatch({ type: 'DECREASE_ITEM', payload: { id } })
  }

  // Get totals
  useEffect(() => dispatch({ type: 'GET_TOTAL' }), [state.cart])

  // Fetch cart data from external API
  const fetchCartData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_DATA', payload: { cart } })
  }
  useEffect(() => {
    fetchCartData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
