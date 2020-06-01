import React from 'react'

function NameList() {
    const names=['bilal', 'amin', 'kamran']
    const nameList= names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList


//1st way to put code <h1>{name[0]}</h1>
//2nd way {names.map(name => <h2>{name}</h2>)}