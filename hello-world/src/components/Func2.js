import React, { Component } from 'react'

export class Func2 extends Component {
    render() {
        const {name , heroName} =this.props
        return (
            <div><h1>
                Welcome {this.props.name} a.k.a {this.props.heroName}
                </h1>
            </div>
        )
    }
}

export default Func2
