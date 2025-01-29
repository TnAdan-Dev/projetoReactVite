import React from "react";

const Weather = () => {
  let temp = 26;

  if (temp < 15) {
    return <h1>está frio lá fora</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>ta de boa la fora</h1>;
  } else if (temp > 25) {
    return <h1>os portões do inferno abriram</h1>;
  }
};

export default Weather;
