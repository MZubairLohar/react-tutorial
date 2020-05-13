import React, { Component } from "react"   // creating component 

class Message extends Component {
    constructor () {
        super()
        this.state = {
            Message : 'Welcome Visiter'
        }
    }
    changeMessage() {
        this.setState(
            {Message: 'Thank you Subscribtion'}
        )
    }
    render(){
        return(
            <div>

            <h1>{this.state.Message}</h1>
            <button onClick = {() => this.changeMessage() }>Subscribe</button> 
            </div>
        )
    }
    
}

// second approach onclick= {this.changeMessage.bind(this)}
export default Message 