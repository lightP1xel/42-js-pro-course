import React from "react";
import Counter from "./components/counter/Counter";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.wrapper}>
      <Counter count={0} />
      <Counter count={2} />
      <Counter count={6} />
      <Counter count={4} />
      <Counter count={10} />
    </div>
  );
};

export default App;
