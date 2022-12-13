import Cocktails from './projects/15-coctails'
import { AppProvider } from './projects/15-coctails/context'

function App() {
  return (
    <AppProvider>
      <Cocktails />
    </AppProvider>
  )
}

export default App
