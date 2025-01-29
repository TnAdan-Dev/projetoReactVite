import React from "react";

const Greeting2 = ({timeOfDay}) => {
  return timeOfDay === "manha" ? <h1>Bom dia!</h1> : <h1>Boa tarde!</h1>;
};

export default Greeting2;
