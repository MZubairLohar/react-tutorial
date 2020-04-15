import React from 'react';  // this is to learn how to use props in functional components

//add props in parameter of function 

const Mutl = (props) => {
console.log(props)
return( 
<div>
    <h1> {props.name} A.K.A. {props.heroName} </h1>
{props.children}
</div>
)

}
export default Mutl