import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HeroLink text='Learn React' />
        <HeroLink text='Unlearn React' />
      </header>
    </div>
  );
}

const HeroLink = (props) => {

  const { text } = props

  const [counter, setCounter] = useState(0)
  const [red, setRed] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRed(!red)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [red])

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >Increment</button> - {counter}
      <br />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: red ? 'red' : 'transparent' }}
      >
        {text}
      </a>
    </div>
  )
}

// class HeroLink extends React.Component {

//   state = { red: true, counter: 0 }

//   componentDidMount() {
//     this.timeout = setTimeout(() => {
//       this.setState({ red: false })
//     }, 2000)
//   }

//   componentDidUpdate() {
//     this.timeout = setTimeout(() => {
//       this.setState({ red: !this.state.red })
//     }, 2000)
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timeout)
//   }

//   render() {
//     const { text } = this.props

//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({ counter: this.state.counter + 1})
//           }}
//         >Increment</button> - {this.state.counter}
//         <br />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ background: this.state.red ? 'red' : 'transparent' }}
//         >
//           {text}
//         </a>
//       </div>
//     )
//   }
// }


export default App;
