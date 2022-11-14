import { useState } from 'react';
import './App.css';
import TimerForm from './components/TimerForm';
import TimerListItem from './components/TimerListItem';

function App() {

  const [timers, setTimers] = useState([]);

  const addTimer = (label, time) => {
    setTimers([...timers, {label, time}]);
    console.log(timers);
  }
  return (
    <div className='App'>
      <h1>Aida's HIIT personal trainer app</h1>
      <TimerForm addTimer={addTimer} />
      {
        timers.map((timer, index) => <TimerListItem label={timer.label} time={timer.time} key={index}/>)
      }
      {
        !!timers.length && <button>START</button>
      }
    </div>
  );
}

export default App;
