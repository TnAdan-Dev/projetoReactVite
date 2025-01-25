import React from 'react'

const UserList = () => {
    const users = [
        {id:1, name: "Ademir", age: 18},
        {id:2, name: "Gabriella", age: 20},
        {id:3, name: "Wallace", age: 17},
    ]
    
  return (
    <div>
        {users.map( user => (
            <ul key={user.id}>
                <li>Nome: {user.name}</li>
                <li>Idade: {user.age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList