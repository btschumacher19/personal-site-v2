import React from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Dropdown from './components/Dropdown/Dropdown';
import GlobalStyle from './globalStyles'


function App() {


  return (
    <div>
      
      <GlobalStyle />
      <Navbar />
    
    </div>
  );
}

export default App;
