import React, { useEffect, useState } from 'react'
import AnalogClock from '../AnalogClock'

import './Clock.css'

const Clock = () => {
  let [date, setDate] = useState(new Date())

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDate(new Date())
    }, 1000)
    return () => clearTimeout(timeout)
  })

  return (
    <AnalogClock date={date} className='Clock' />
  )
}

export default Clock
