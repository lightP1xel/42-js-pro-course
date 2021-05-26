import React, { useState } from "react";
import style from "./Counter.module.css";
import { HiPlusCircle } from "react-icons/hi";
import { AiFillMinusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.count);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.counter}>
        <h1 className={style.counterHeading}>{counter}</h1>
        <div className={style.buttonWrapper}>
          <button className={style.button} onClick={plus}>
            <HiPlusCircle fontSize="50px" />
          </button>
          <button className={style.button} onClick={reset}>
            <GrPowerReset fontSize="50px" />
          </button>
          <button className={style.button} onClick={minus}>
            <AiFillMinusCircle fontSize="50px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
