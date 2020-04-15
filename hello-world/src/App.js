import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'   // imported funtional component called Greet
import Welcome from './components/Welcome' // statful component creation
import Hello from './components/Hello'  // updating with jsx (note: jsx is simpler)
import Hello2 from './components/Hello2';  // updating without jsx 
import Mutl from './components/Mutl' // usage of props
import Mult2 from './components/Mult2' // class components
function App() {
  return (
    <div className="App">  
     
       <Greet />   
       <Welcome />
       <Hello />
       <Hello2 />
       <Mutl name="Tony" heroName="Iron Man"> "Best Hero"  </ Mutl>
       <Mutl name="Bruce" heroName="Hulk"> <button>Powerful Avenger</button></Mutl>
       <Mutl name="Peter" heroName="Spider Man"/>
       
       <Mult2 name="Tony" heroName="Iron Man" />
       <Mult2 name="Bruce" heroName="Hulk"/>
       <Mult2 name="Peter" heroName="Spider Man"/>
    </div>
  );
}

export default App;
