import React, { useState } from "react";

const TimerForm = ({ addTimer }) => {
  const [label, setLabel] = useState("");
  const [time, setTime] = useState(0);
  const handleSubmit = ($event) => {
    $event.preventDefault();
    addTimer(label, time);
    setTime(0);
    setLabel("");
  };
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
    </>
  );
};

export default TimerForm;
