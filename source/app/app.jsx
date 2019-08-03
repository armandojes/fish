import React from 'react';
import 'reset-css';
import './base.css';
import Header from './components/header';
import Landing from './components/landing';
import Readme from './components/readme';


function App (){
  return (
    <div>
      <Header />
      <Landing />
      <Readme />
    </div>
  )
}

export default App;
