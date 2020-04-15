import React, {Component} from 'react';


//how to use class components for this 
class Mult2 extends Component {
    render () {
        return <h1> {this.props.name} a.k.a. {this.props.heroName} </h1>
    
    }
}

export default Mult2