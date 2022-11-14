import React from 'react'

const TimerListItem = ({label, time}) => {
  return (
    <div>
      <span>{label}</span>:
      <span>{time}</span>
    </div>
  )
}

export default TimerListItem