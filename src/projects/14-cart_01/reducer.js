const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case 'INCREASE_ITEM':
      let tempCartIncrease = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 }
        }
        return item
      })
      return { ...state, cart: tempCartIncrease }
    case 'DECREASE_ITEM':
      let tempCartDecrease = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount - 1 }
          }
          return item
        })
        .filter((item) => item.amount !== 0)
      return { ...state, cart: tempCartDecrease }
    case 'GET_TOTAL':
      let { total, amount } = state.cart.reduce(
        (cartTotal, currItem) => {
          const { amount, price } = currItem
          console.log(amount, price)
          const itemTotal = price * amount

          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        },
        { total: 0, amount: 0 }
      )
      total = total.toFixed(2)
      return { ...state, total, amount }
    case 'LOADING':
      return { ...state, loading: true }
    case 'DISPLAY_DATA':
      return { ...state, loading: false, cart: action.payload.cart }
    default:
      return state
  }
}

export default reducer
