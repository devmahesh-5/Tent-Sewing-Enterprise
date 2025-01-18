import { Outlet } from 'react-router-dom'
import './App.css'
import {Header} from './components'
import {Footer} from './components'
function App() {
  return (
    <div className='bg-gray-400 min-h-screen flex flex-wrap content-between'>
    <div className='w-full block'>
    <Header />
    <main>
     < Outlet />
    </main>
    <Footer />
    </div>
  </div>
  )
}

export default App
