import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated import statement

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Shoppingcart from './Shoppingcart';
import Todo from './Todo'

const Navbar = () => {
  return (
    <Router>
      <div className='container'>
        <ul className='navlist'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
     
      <button className='shopping-cart1'> <Link to="/shoppingcart">Shopping cart</Link></button>
      <button className='todo'> <Link to="/todo">Todo app</Link></button>
      
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
        <Route path="/todo" element={<Todo />} />
      </Routes> 
    </Router>
  );
};

export default Navbar;

