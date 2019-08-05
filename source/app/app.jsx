import React from 'react';
import 'reset-css';
import './base.css';
import Header from './components/header';
import Landing from './components/landing';
import Readme from './components/readme';
import Circle from './components/circle';


function App (){
  return (
    <div>
      <Header />
      <Circle />
      <Landing />
      <Readme />
    </div>
  )
}

export default App;
