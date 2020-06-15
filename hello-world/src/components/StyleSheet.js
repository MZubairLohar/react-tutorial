import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''

    return (
        <div>
            <h1 className='primary'>Style Sheet</h1>
            <h1 className = {`${className} font-ux`}> Style Sheet props way</h1>
        </div>
    )
}

export default StyleSheet
