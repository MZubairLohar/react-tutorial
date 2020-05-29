import React, { Component } from 'react'

class userGreetings extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            isloggedIn: false
       }
   }
   
    render() {
        return (
            <div>
               <div> welcome Boss</div>
               <div> welcome Guest</div>             
            </div>
        )
    }
}

export default userGreetings
