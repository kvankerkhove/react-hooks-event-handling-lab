import React from 'react'

function Keypad(){

    function change(event){
        event.preventDefault()
        console.log('Entering password...')
    }

    return (
        <input type='password' onChange={change}></input>
    )
}

export default Keypad