import React from 'react';
//import logo from '/logo.svg';
import './App.css';
// import Greet from './components/Greet'   // imported funtional component called Greet
// import Welcome from './components/Welcome' // statful component creation
// import Hello from './components/Hello'  // updating with jsx (note: jsx is simpler)
// import Hello2 from './components/Hello2';  // updating without jsx 
// import Mutl from './components/Mutl' // usage of props
// import Mult2 from './components/Mult2' // class components
// import Message from './components/Message'
// import Counter from './components/Counter'
// import Func from './components/Func'
// import Func2 from './components/Func2'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import ParentComponent from './components/ParentComponent'
//import UserGreetings from './components/UserGreetings'
//import NameList from './components/NameList'
//import PersonList from './components/PersonList'
//import Person from './components/Person'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './components/AppStyles.css'
import styles from './components/AppStyles.module.css'

function App() {
  return (
    <div className="App">  
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>
    <StyleSheet primary = {true} />
    <Inline />
    {/* <UserGreetings />
    <PersonList /> */}
       {/* <NameList/> */}
       {/* <Greet />   
       <Welcome />
       <Message />
       <hr/>
       <Hello />
       <Hello2 />
       <hr/>
       <Mutl name="Tony" heroName="Iron Man"> "Best Hero"  </ Mutl>
       <Mutl name="Bruce" heroName="Hulk"> <button>Powerful Avenger</button></Mutl>
       <Mutl name="Peter" heroName="Spider Man"/>
       <hr/>
       <Mult2 name="Tony" heroName="Iron Man" />
       <Mult2 name="Bruce" heroName="Hulk"/>
       <Mult2 name="Peter" heroName="Spider Man"/>
       <hr/>
       <Counter />
       <hr />
       <Func name="Dr Steven Strange" heroName="Dr Strange"/>
       <Func2 name="Thor" heroName="Thor"/>
       <FunctionClick />
       <ClassClick />
       <ParentComponent /> */}
       

    </div>
  );
}

export default App;
