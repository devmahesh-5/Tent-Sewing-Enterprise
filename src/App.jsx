import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Footer } from './components';
import { useState, useEffect } from 'react';
import { login, logout } from './store/authSlice';
import { useDispatch } from 'react-redux';
import authService from './services/auth.js';

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login({ userData })) : dispatch(logout());
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-[#F5F5F5]">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
