import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import { useAuth } from './auth/AuthContext';

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
