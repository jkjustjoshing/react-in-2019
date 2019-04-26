import React, { useState, memo } from 'react'
// import Loading from './components/Loading'
import './App.css';

// const Clock = lazy(() => import('./components/tabs/Clock'))
// const Timer = lazy(() => import('./components/tabs/Timer'))


const App = () => {
  console.log('Rendering App')

  // const [tab, setTab] = useState(null)

  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)

  return (
    <>
      {/* <div className='App__nav'>
        {
          ['Clock', 'Timer'].map((item, index) => (
            <button
              key={index}
              className={'App__nav-item' + (tab === index ? ' App__nav-item--active' : '')}
              onClick={() => setTab(index)}
            >{item}</button>
          ))
        }
      </div> */}

      <MyComponent id='1' val={first} setter={setFirst} />
      <MyComponent id='2' val={second} setter={setSecond} />

      {/* <div className='App__body'>
        <Suspense fallback={<Loading />}>
          {
            tab === 0 ? <Clock /> : null
          }
          {
            tab === 1 ? <Timer /> : null
          }
        </Suspense>
      </div> */}
    </>
  )
}

// // Pure class component using React.PureComponent
// class MyComponent extends React.PureComponent {

//   render() {
//     console.log(`Rendering MyComponent, id=${this.props.id}`)

//     return <div
//       style={{ border: '1px solid black' }}
//     >
//       ID: {this.props.id},
//       <button
//         onClick={() => this.props.setter(this.props.val + 1)}
//       >Increment</button> {this.props.val}
//     </div>
//   }
// }

// Pure functional component using React.memo
const MyComponent = memo((props) => {
  console.log(`Rendering MyComponent, id=${props.id}`)

  return <div
    style={{ border: '1px solid black' }}
  >
    ID: {props.id},
    <button
      onClick={() => props.setter(props.val + 1)}
    >Increment</button> {props.val}
  </div>
})

export default App

