import React, { useState } from "react";
import { Link } from "react-router-dom";
import TimerListItem from "../TimerListItem";

const TimerForm = () => {
  const [label, setLabel] = useState("");
  const [time, setTime] = useState(0);
  const [timers, setTimers] = useState([]);
  const handleSubmit = ($event) => {
    $event.preventDefault();
    addTimer(label, time);
    setTime(0);
    setLabel("");
  };


  const addTimer = (label, time) => {
    setTimers([...timers, {label, time}]);
  }
  return (
    <>
      <h2>Add a timer:</h2>
      <form onSubmit={($event) => handleSubmit($event)}>
        <div className="form-group">
          <label htmlFor="label">Label:</label>
          <input
            type="text"
            name="label"
            value={label}
            className="form-control"
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time (seconds):</label>
          <input
            type="number"
            name="time"
            value={time}
            className="form-control"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!label || !time}
        >
          Submit
        </button>
      </form>
      {
        timers.map((timer, index) => <TimerListItem label={timer.label} time={timer.time} key={index}/>)
      }
      {
        !!timers.length && <Link to='start' state={timers}><button>START</button></Link>
      }
    </>
  );
};

export default TimerForm;
