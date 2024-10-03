import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Routes and Route
import logo from './logo.svg';
import './App.css';
import { About } from './components/about/about.component';
import { Home } from './components/home/home.component';
import { NotFound } from './components/not-found/not-found.component';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <div className="App">
      <nav>
        {/* Links for navigation */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/customer-form" element={<CustomerList />} />
      </Routes>
    </div>
  );
}

export default App;
