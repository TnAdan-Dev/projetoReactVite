import React from 'react'

const App = () => {

  const styles = {
    color: 'red', backgroundColor: 'teal', padding: "2rem"
  }

  return (
    <section>
      <h1 style={ styles }>Estilo Inline</h1>
    </section>
  )
}

export default App
















// import React from 'react'
// import Greeting2 from './components/Greeting2'
// import UserStatus from './components/UserStatus'
// import Weather from './components/Weather'

// const App = () => {
//   return (
//     <section>
//       <Weather/>
//       <UserStatus loggedIn ={true} isAdmin = {false}/>
//       <Greeting2 timeOfDay = "manha"/>
//     </section>
//   )
// }

// export default App



// import React from "react";



// const ValidPassword = () => <h1>Senha Valida</h1>
// const InvalidPassword = () => <h1>Senha Invalida</h1>

// const Password = ({isValid}) => {
//   return isValid ? <ValidPassword/> : <InvalidPassword/>;
// }

// const App = () => {
//   return (
//     <Password isValid ={true}/>
//   );
// };

// export default App;
