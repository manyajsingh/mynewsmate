import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import ChooseAvatar from './pages/ChooseAvatar';
import LoginSignup from './pages/LoginSignup';
import Navbar from './components/Navbar';
import './App.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/news" component={News} />
        <Route path="/avatar" component={ChooseAvatar} />
        <Route path="/login" component={LoginSignup} />
      </Routes>
    </Router>
  );
}

export default App;
