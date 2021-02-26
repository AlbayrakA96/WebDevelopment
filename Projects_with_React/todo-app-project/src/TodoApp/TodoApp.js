import React from 'react'

const TodoApp = (props) => {
     

    return (
        
        <div>
            <input onChange={props.onchange}></input> 

            <button  onClick={props.change} >Add to</button>
        </div>
    )
}

export default TodoApp
