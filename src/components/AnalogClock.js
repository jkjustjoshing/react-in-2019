import React from 'react'

const AnalogClock = ({ date, ...props }) => {

  const time = {
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours() % 12 // calculate 0-11 hour
  }

  return (
    <svg viewBox='-52 -52 104 104' {...props}>
      <circle x='0' y='0' r='50' fill='transparent' stroke='black' />
      <Ticks />
      <Hand value={time.hours + (time.minutes / 60) } total='12' length='30' />
      <Hand value={time.minutes} total='60' length='48' />
      <Hand value={time.seconds} total='60' length='48' strokeWidth='0.5' stroke='red' />
    </svg>
  )
}

export default AnalogClock


const Hand = ({ value, total, length, ...props }) => {
  const y = -1 * Math.cos(value / total * 2 * Math.PI)
  const x = Math.sin(value / total * 2 * Math.PI)

  return (
    <line
      x1='0'
      y1='0'
      x2={x * length}
      y2={y * length}
      stroke='black'
      strokeLinecap='round'
      { ...props }
    />
  )
}

const Ticks = React.memo(() => {

  const minR = 46
  const maxR = 48

  return Array.from({ length: 12 }, (k, i) => {
    const y = -1 * Math.cos(i / 12 * 2 * Math.PI)
    const x = Math.sin(i / 12 * 2 * Math.PI)

    return <line
      key={i}

      x1={x * minR}
      y1={y * minR}
      x2={x * maxR}
      y2={y * maxR}
      stroke='black'

    />
  })
})
