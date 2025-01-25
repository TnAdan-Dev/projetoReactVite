import React from 'react'

const Person = (props) => {
  return (
    <div>
        <h2>Nome: {props.name}</h2>
        <p>Idade: {props.age}</p>
    </div>
  )
}

export default Person