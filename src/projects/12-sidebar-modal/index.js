import { AppProvider } from './Context'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'
import './index.css'

function SidebarModal() {
  return (
    <>
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </>
  )
}

export default SidebarModal
