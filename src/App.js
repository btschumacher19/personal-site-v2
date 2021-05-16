import React, { useState } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import GlobalStyle from './globalStyles'
import Navbar, { NavUnder } from './components/Navbar/Navbar';
import Dropdown from './components/Dropdown/Dropdown';

import Home from './pages/Home';
import { SliderData } from './data/SliderData';

const BASE_URL = "/personal-site-v2"

function App() {

  const [ isOpen, setIsOpen ] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      < Router >
      <GlobalStyle />
      <NavUnder />
      <Navbar toggle={ toggleNav }/>
      <Dropdown isOpen={ isOpen } toggle={ toggleNav } />
        <Route
          exact path={`${BASE_URL}`}
          render={(props) => <Home {...props}  />}
        />
      </Router>
      
    </div>
  );
}

export default App;
