import React from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyles'
import Hero from './components/Hero/Hero';
import { SliderData } from './data/SliderData';


function App() {


  return (
    <div>
      
      <GlobalStyle />
      <Navbar />
      <Hero slides={ SliderData }/>
    </div>
  );
}

export default App;
