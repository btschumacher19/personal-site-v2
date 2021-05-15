import React, { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import GlobalStyle from './globalStyles'
import Navbar, { NavUnder } from './components/Navbar/Navbar';
import Dropdown from './components/Dropdown/Dropdown';
import Hero from './components/Hero/Hero';
import Info from './components/Content/InfoOne';
import { InfoDataOne, InfoDataTwo, InfoDataThree } from './data/InfoData'
import { SliderData } from './data/SliderData';



function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      
      <GlobalStyle />
      <NavUnder />
      <Navbar toggle={ toggleNav }/>
      <Dropdown isOpen={ isOpen } toggle={ toggleNav } />
      <Hero />
      
      <Info { ...InfoDataOne }/>
      <Info { ...InfoDataThree } />
      <Info { ...InfoDataTwo } />
      
    </div>
  );
}

export default App;
