import React from 'react'

const alert = () => {
    alert('You clicked me!')
}

function Button() {
  return (
    <div>
        <h1>This is a button!</h1>
        <button onClick={alert}>Click me!</button>
    </div>
  )
}

export default Button