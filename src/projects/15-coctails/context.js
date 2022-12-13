import { useState, useContext, createContext, useEffect } from 'react'

const AppContext = createContext()

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [cocktails, setCocktails] = useState([])

  const fetchCocktails = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const cocktailsData = await response.json()
      if (cocktailsData) {
        const { drinks } = cocktailsData
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } =
            drink
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            image: strDrinkThumb,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCocktails()
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
