import { useState, useEffect } from 'react'

const useTimer = (initialTime, initialPaused) => {

  let [ paused, setPaused ] = useState(initialPaused)
  let [ timeLeft, setTimeLeft ] = useState(initialTime)

  useEffect(() => {
    if (!paused) {
      let timeout = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [paused, timeLeft])

  return [ timeLeft, paused, setPaused ]

}


export default useTimer
