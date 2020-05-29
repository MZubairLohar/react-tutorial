import React, { Component } from 'react'

class UserGreetings extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            isLoggedIn: true
       }
   }
   
    render() {
        // short circuit operator is also good
        return this.state.isLoggedIn && <div>Welcome Boss</div>

        // conditional operator best 
        // return(
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Boss</div>) :
        //     (<div>Welcome Guest</div>)
        // )
    //     let message
    //     if(this.state.isLoggedIn){
    //         message = <div>Welcome Boss</div>
    //     }else{
    //         message = <div>Welcome Guest</div>
    //     }
    // return <div>{message}</div>
        // if(this.state.isloggedIn){
        //     return(
        //         <div>Welcome Boss</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome guest</div>
        //     )
        // }
        // return (
        //     <div>
        //        <div> welcome Boss</div>
        //        <div> welcome Guest</div>             
        //     </div>
        // )
    }
}

export default UserGreetings
