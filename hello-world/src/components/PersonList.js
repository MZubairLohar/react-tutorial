import React from 'react'
import Person from './Person'

function PersonList() {
    const persons=[
        {
            id :1,
            name:'bilal',
            age: 23,
            skill: 'node js'
        },
        {
            id :2,
            name:'afzal',
            age: 22,
            skill: 'angular'
        },
        {
            id :3,
            name:'kashif',
            age: 24,
            skill: 'javascript'
        }
    ]
const personsList = persons.map (person => <Person person = {person} />)
    return (
        <div>{personsList}</div>)
}

export default PersonList