import React from "react";
import { useState } from "react";



const App = () => {



  const [friends, setFriends] = useState(["alex", "john"]);

   const addOneFriend = () => setFriends([...friends, "ademir"]);
    
   const removeOneFriend = () => setFriends(friends.filter((f) => f != "john"));
   const updateOneFriend = () => {
    setFriends(friends.map(f => f === "alex" ? "alex fofin" : f))
   }
    
   
  return (
    <section>
      {friends.map(f => (
        <li key={Math.random}>{f}</li>
      ))}

      <button onClick={addOneFriend}>adiciona mais um amigo</button>
      <button onClick={removeOneFriend}>remove um amigo</button>
      <button onClick={updateOneFriend}>atualizar um amigo</button>
    </section>



  );
};

export default App;
