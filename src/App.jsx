import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
    <section>
      <Person name="ademir" age="18" />
      <Product name="piscina olimpica" price="29999"/>
    </section>
  );
};

export default App;
