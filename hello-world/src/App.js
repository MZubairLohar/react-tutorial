import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'   // imported funtional component called Greet
import Welcome from './components/Welcome' // statful component creation
import Hello from './components/Hello'  // updating with jsx (note: jsx is simpler)
import Hello2 from './components/Hello2'  // updating without jsx 
function App() {
  return (
    <div className="App">  
     
       <Greet />   
       <Welcome />
       <Hello/>
       <Hello2/>
    </div>
  );
}

export default App;
