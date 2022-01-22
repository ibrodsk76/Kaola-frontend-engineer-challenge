import React, {useRef, useState, useEffect} from "react";
import { StyledCountdown, StyledTimer, StyleButton, StyleDeadline } from "./Styles";
import {TimerDisplay} from '../Timer/TimerDisplay';
import {TimeInput} from "../TimeInput/TimeInput";

// Write your countdown code in this component
export const Countdown = () => {
  const [deadline, setDeadline] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const interval = useRef() as React.MutableRefObject<number>; 

  useEffect(() => {
    let formattedDate = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
    setDeadline(formattedDate);
  }, []);


  const run = () => {
    setRunning(true);
    interval.current = setInterval(() => {
      setCurrentTime(new Date());
    },1000);
  }

  const stop = () => {
    setRunning(false);
     clearInterval(interval.current);
  }

  const reachedDeadline = () => {
    stop();
    setDone(true);
  }

  return (
    <StyledCountdown>
      <img src="koala-logo.png" alt="logo" />
      <h1>Koala Frontend Engineer Coding Challenge</h1>

      <StyledTimer>
        {!running &&<TimeInput currentDeadline={deadline} onChange={(value) => {setDeadline(value); setDone(false);}}></TimeInput>}
        {done && <StyleDeadline>DEADLINE PASSED!!!</StyleDeadline>}
        {running && <TimerDisplay deadline={deadline} currentTime={currentTime} onDone={reachedDeadline}></TimerDisplay>}
        <p>
        <StyleButton data-testid="startbutton" onClick={() => run()} disabled={running}>Start</StyleButton>
        <StyleButton data-testid="stopbutton" onClick={() => stop()} disabled={!running}>Stop</StyleButton>
        </p>
      </StyledTimer>
    </StyledCountdown>
  );
};
