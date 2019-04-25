import React, { useState, useEffect } from 'react'

const Timer = () => {

  let [ paused, setPaused ] = useState(false)
  let [ timeLeft, setTimeLeft ] = useState(10)

  useEffect(() => {
    if (!paused) {
      let timeout = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [timeLeft, paused])

  return (
    <div>

      <div>Time left: <Time seconds={timeLeft} /></div>

      <button onClick={() => setPaused(!paused)}>{paused ? 'Start' : 'Pause'}</button>
    </div>
  )
}

export default Timer


const Time = ({ seconds }) => {

  let secondsLeft = seconds % 60
  let minutesLeft = Math.floor(seconds / 60)

  return minutesLeft + ':' + secondsLeft
}
