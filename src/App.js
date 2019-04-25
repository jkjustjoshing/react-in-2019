import React, { useState, lazy, Suspense } from 'react'
import Loading from './components/Loading'
import './App.css';

const Clock = lazy(() => import('./components/tabs/Clock'))
const Timer = lazy(() => import('./components/tabs/Timer'))


const App = () => {

  const [tab, setTab] = useState(null)

  return (
    <>
      <div className='App__nav'>
        {
          ['Clock', 'Timer'].map((item, index) => (
            <button
              key={index}
              className={'App__nav-item' + (tab === index ? ' App__nav-item--active' : '')}
              onClick={() => setTab(index)}
            >{item}</button>
          ))
        }
      </div>
      <div className='App__body'>
        <Suspense fallback={<Loading />}>
          {
            tab === 0 ? <Clock /> : null
          }
          {
            tab === 1 ? <Timer /> : null
          }
        </Suspense>
      </div>
    </>
  )
}

export default App

// Use normal function so it gets hoisted to top
function delay(fn) {
  return () => (new Promise((resolve) => setTimeout(resolve, 1000))).then(fn)
}
