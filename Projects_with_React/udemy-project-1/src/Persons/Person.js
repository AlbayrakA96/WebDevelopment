import React from 'react'
import './Perons.css'

const Person = (props) => {
    
    return (
        <div className='Person'>
            <p>Username: {props.name}</p>
            <p>Hobby's: {props.hobby}</p>
        </div>
    )
}

export default Person
