import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const TimerDisplay = () => {
  const [index, setIndex] = useState(0);
  const [label, setLabel] = useState('');
  const {state} = useLocation();
  const navigate = useNavigate();
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
    setLabel(state[index].label)
    setTime(parseInt(state[index].time))
  }, [index, state])

  useEffect(() => {
    while (time > 0) {
      const interval = setInterval(() =>  setTime(prevTime => prevTime - 1), 100);
      return () => clearInterval(interval);
    }
    if (time === 0) {
      if (index < length) {
        console.log('setIndex');
        setIndex(prevIndex => prevIndex + 1)
      } else {
        console.log('return to creation');
        navigate('/');
      }
    }
  }, [time, index, length, navigate]);
  return (
    <div>
      <h1>{label}</h1>
      <h1>{calculateDisplayTime(time)}</h1>
    </div>
  )
}

export default TimerDisplay