import React from 'react'
import useTimer from '../../useTimer'

const Timer = () => {

  const [ timeLeft, paused, setPaused ] = useTimer(10, false)

  return (
    <div>

      <div>Time left: <Time seconds={timeLeft} /></div>

      <button
        onClick={() => {
          setPaused(!paused)
        }}>
          {paused ? 'Start' : 'Pause'}
        </button>
    </div>
  )
}

export default Timer


const Time = ({ seconds }) => {

  let secondsLeft = seconds % 60
  let minutesLeft = Math.floor(seconds / 60)

  return minutesLeft + ':' + secondsLeft
}
