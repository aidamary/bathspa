import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const TimerDisplay = () => {
  const [index, setIndex] = useState(0);
  const [label, setLabel] = useState('');
  const {state} = useLocation();
  const [time, setTime] = useState(-1);
  let length = state.length - 1;
  console.log(state);
  const calculateDisplayTime = () => {
    const pad = (n) => n < 10 ? `0${n}` : n;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60)
    const seconds = time - (hours * 3600) - (minutes * 60)
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  }

  useEffect(() => {
    //console.log(state[index], index);
    setLabel(state[index].label)
    setTime(parseInt(state[index].time))
  }, [index])

  useEffect(() => {
    while (time > 0) {
      const interval = setInterval(() =>  setTime(prevTime => prevTime - 1), 1000);
      return () => clearInterval(interval);
    }
    if (time === 0) {
      if (index < length) {
        console.log('setIndex');
        setIndex(prevIndex => prevIndex + 1)
      } else {
        console.log('return to creation');
      }
    }
  }, [time]);
  return (
    <div>
      <h1>{label}</h1>
      <h1>{calculateDisplayTime(time)}</h1>
    </div>
  )
}

export default TimerDisplay