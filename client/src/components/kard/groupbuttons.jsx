import React, { useState } from "react";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    marginTop: 30,
  },
  button: {
    borderRadius: "50%",
  },
});

const GroupButtons = () => {
  const [counter, setCounter] = useState(1);
  const clasess = useStyle();

  const handleDicrement=()=>{
      setCounter(counter => counter - 1);
  }
   const handleIncrement = () => {
     setCounter((counter) => counter + 1);
   };
  return (
    <>
      <ButtonGroup className={clasess.componetnt}>
        <Button className={clasess.button} disabled={counter==1} onClick={() => handleDicrement()}>
          -
        </Button>
        <Button>{counter}</Button>
        <Button className={clasess.button} onClick={() => handleIncrement()}>
          +
        </Button>
      </ButtonGroup>
    </>
  );
};

export default GroupButtons;
