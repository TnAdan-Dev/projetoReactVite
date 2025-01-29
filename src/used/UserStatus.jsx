import React from 'react'

const UserStatus = (props) => {
  
    if(props.loggedIn && props.isAdmin){
        return(<h1>Bem Vindo Admin!</h1>);
    }
    if(props.loggedIn){
        return(<h1>Bem Vindo Usuario</h1>);
    }
  
}

export default UserStatus