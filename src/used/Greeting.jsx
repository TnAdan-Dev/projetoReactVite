import React from 'react'

const greet = "Bem Vindo"
const date = new Date();


const Greeting = () => {
  return (
    <div>
        <h1>{greet}</h1>
        <p>data: {date.getDate()}</p>
    </div>
  )
}

export default Greeting