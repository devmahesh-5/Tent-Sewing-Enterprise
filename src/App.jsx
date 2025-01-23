import { Outlet } from 'react-router-dom'
import './App.css'
import {Header} from './components'
import {Footer} from './components'
import { useState, useEffect} from 'react'
import  {login, logout} from './store/authSlice'
import { useDispatch } from 'react-redux'
import authService from './services/auth.js'
function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      userData ? dispatch(login({userData})) : dispatch(logout());
    })
    .catch((error)=>{
      setError(error);
    })
    .finally(()=>{
      setLoading(false);
    })
  },[]);

  return !loading?(
    <div className='bg-gray-400 min-h-screen flex flex-wrap content-between'>
    <div className='w-full block'>
    <Header />
    <main>
     < Outlet />
    </main>
    <Footer />
    </div>
  </div>
  ):null;
}

export default App
